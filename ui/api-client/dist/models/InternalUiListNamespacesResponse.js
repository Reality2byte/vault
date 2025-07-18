"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.21.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfInternalUiListNamespacesResponse = instanceOfInternalUiListNamespacesResponse;
exports.InternalUiListNamespacesResponseFromJSON = InternalUiListNamespacesResponseFromJSON;
exports.InternalUiListNamespacesResponseFromJSONTyped = InternalUiListNamespacesResponseFromJSONTyped;
exports.InternalUiListNamespacesResponseToJSON = InternalUiListNamespacesResponseToJSON;
exports.InternalUiListNamespacesResponseToJSONTyped = InternalUiListNamespacesResponseToJSONTyped;
/**
 * Check if a given object implements the InternalUiListNamespacesResponse interface.
 */
function instanceOfInternalUiListNamespacesResponse(value) {
    return true;
}
function InternalUiListNamespacesResponseFromJSON(json) {
    return InternalUiListNamespacesResponseFromJSONTyped(json, false);
}
function InternalUiListNamespacesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'keys': json['keys'] == null ? undefined : json['keys'],
    };
}
function InternalUiListNamespacesResponseToJSON(json) {
    return InternalUiListNamespacesResponseToJSONTyped(json, false);
}
function InternalUiListNamespacesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'keys': value['keys'],
    };
}
