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
/**
 * Check if a given object implements the LeasesReadLeaseRequest interface.
 */
export function instanceOfLeasesReadLeaseRequest(value) {
    return true;
}
export function LeasesReadLeaseRequestFromJSON(json) {
    return LeasesReadLeaseRequestFromJSONTyped(json, false);
}
export function LeasesReadLeaseRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'leaseId': json['lease_id'] == null ? undefined : json['lease_id'],
    };
}
export function LeasesReadLeaseRequestToJSON(json) {
    return LeasesReadLeaseRequestToJSONTyped(json, false);
}
export function LeasesReadLeaseRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'lease_id': value['leaseId'],
    };
}
