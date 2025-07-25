/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

/* eslint-disable ember/no-settled-after-test-helper */
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';
import { setupMirage } from 'ember-cli-mirage/test-support';
import syncScenario from 'vault/mirage/scenarios/sync';
import syncHandlers from 'vault/mirage/handlers/sync';
import { allowAllCapabilitiesStub } from 'vault/tests/helpers/stubs';
import { login } from 'vault/tests/helpers/auth/auth-helpers';
import { settled, click, visit, currentURL, fillIn, currentRouteName } from '@ember/test-helpers';
import { PAGE as ts } from 'vault/tests/helpers/sync/sync-selectors';
import { GENERAL } from 'vault/tests/helpers/general-selectors';
import sinon from 'sinon';

// sync is an enterprise feature but since mirage is used the enterprise label has been intentionally omitted from the module name
module('Acceptance | sync | destination (singular)', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  hooks.beforeEach(async function () {
    syncScenario(this.server);
    syncHandlers(this.server);
    this.server.post('/sys/capabilities-self', allowAllCapabilitiesStub());
    return login();
  });

  test('it should transition to overview route via breadcrumb', async function (assert) {
    await visit('vault/sync/secrets/destinations/aws-sm/destination-aws/secrets');
    await click(ts.breadcrumbAtIdx(0));
    assert.strictEqual(
      currentURL(),
      '/vault/sync/secrets/overview',
      'Transitions to overview on breadcrumb click'
    );
  });

  test('it should transition to correct routes when performing actions', async function (assert) {
    await click(ts.navLink('Secrets Sync'));
    await click(GENERAL.tab('Destinations'));
    await click(GENERAL.listItemLink);
    assert.dom(GENERAL.tab('Secrets')).hasClass('active', 'Secrets hdsTab is active');

    await click(GENERAL.tab('Details'));
    assert.dom(ts.infoRowLabel('Name')).exists('Destination details display');

    await click(ts.toolbar('Sync secrets'));
    await click(GENERAL.cancelButton);

    await click(ts.toolbar('Edit destination'));
    assert.dom(ts.inputByAttr('name')).isDisabled('Edit view renders with disabled name field');
    await click(GENERAL.cancelButton);
    assert.dom(GENERAL.tab('Details')).hasClass('active', 'Details view is active');
  });

  test('it should delete destination', async function (assert) {
    await visit('vault/sync/secrets/destinations/aws-sm/destination-aws/details');
    await click(ts.toolbar('Delete destination'));
    await fillIn(ts.confirmModalInput, 'DELETE');
    await click(ts.confirmButton);
    assert.strictEqual(currentURL(), '/vault/sync/secrets/overview', 'navigates back to overview on delete');
  });

  test('it should not save placeholder values for credentials', async function (assert) {
    assert.expect(2);

    const apiService = this.owner.lookup('service:api');
    const apiStub = sinon.stub(apiService.sys, 'systemPatchSyncDestinationsVercelProjectName');
    const { deployment_environments, project_id, team_id, name, type, secret_name_template } =
      this.server.create('sync-destination', 'vercel-project');
    const response = {
      data: {
        connection_details: { access_token: '*****', deployment_environments, project_id, team_id },
        name,
        options: { custom_tags: {}, secret_name_template },
        type,
      },
    };
    apiStub.resolves(response);

    await visit('vault/sync/secrets/destinations/vercel-project/destination-vercel/edit');
    await fillIn(GENERAL.inputByAttr('team_id'), 'team-id');
    await click(GENERAL.submitButton);
    assert.false('access_token' in apiStub.lastCall.args[1], 'access_token not sent in request');

    await click(ts.toolbar('Edit destination'));
    await click(ts.enableField('access_token'));
    await fillIn(GENERAL.inputByAttr('access_token'), 'foobar');
    await click(GENERAL.submitButton);
    assert.strictEqual(
      apiStub.lastCall.args[1].access_token,
      'foobar',
      'Updated access token sent in patch request'
    );
  });

  test('it should redirect to secrets view if purge is in progress', async function (assert) {
    const route = 'vault.cluster.sync.secrets.destinations.destination.secrets';
    this.server.db.syncDestinations.update({ purge_initiated_at: '2024-02-08T11:49:04.123251-07:00' });

    await visit('vault/sync/secrets/overview');
    await settled();
    await click(ts.overview.table.actionToggle(0));
    await click(ts.overview.table.action('sync'));
    assert.strictEqual(
      currentRouteName(),
      route,
      'Redirects to destination secrets view from overview sync action when purge is in progress'
    );

    await click(ts.breadcrumbLink('Destinations'));
    await click(GENERAL.menuTrigger);
    await click(GENERAL.menuItem('edit'));
    assert.strictEqual(
      currentRouteName(),
      route,
      'Redirects to destination secrets view from list edit action when purge is in progress'
    );

    await click(ts.breadcrumbLink('Destinations'));
    await click(GENERAL.menuTrigger);
    await click(GENERAL.menuItem('details'));
    assert.strictEqual(
      currentRouteName(),
      'vault.cluster.sync.secrets.destinations.destination.details',
      'Does no redirect when navigating to destination route other than edit or sync'
    );
  });

  test('it should render correct number of associations in list for sub keys', async function (assert) {
    this.server.db.syncDestinations.update({ granularity: 'secret-key' });

    await visit('vault/sync/secrets/destinations/vercel-project/destination-vercel/secrets');
    assert.dom('[data-test-list-item]').exists({ count: 3 }, 'Sub key associations render in list');
  });
});
