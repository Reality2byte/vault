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
exports.PkiGenerateKmsKeyRequestKeyTypeEnum = void 0;
exports.instanceOfPkiGenerateKmsKeyRequest = instanceOfPkiGenerateKmsKeyRequest;
exports.PkiGenerateKmsKeyRequestFromJSON = PkiGenerateKmsKeyRequestFromJSON;
exports.PkiGenerateKmsKeyRequestFromJSONTyped = PkiGenerateKmsKeyRequestFromJSONTyped;
exports.PkiGenerateKmsKeyRequestToJSON = PkiGenerateKmsKeyRequestToJSON;
exports.PkiGenerateKmsKeyRequestToJSONTyped = PkiGenerateKmsKeyRequestToJSONTyped;
/**
* @export
* @enum {string}
*/
var PkiGenerateKmsKeyRequestKeyTypeEnum;
(function (PkiGenerateKmsKeyRequestKeyTypeEnum) {
    PkiGenerateKmsKeyRequestKeyTypeEnum["RSA"] = "rsa";
    PkiGenerateKmsKeyRequestKeyTypeEnum["EC"] = "ec";
    PkiGenerateKmsKeyRequestKeyTypeEnum["ED25519"] = "ed25519";
})(PkiGenerateKmsKeyRequestKeyTypeEnum || (exports.PkiGenerateKmsKeyRequestKeyTypeEnum = PkiGenerateKmsKeyRequestKeyTypeEnum = {}));
/**
 * Check if a given object implements the PkiGenerateKmsKeyRequest interface.
 */
function instanceOfPkiGenerateKmsKeyRequest(value) {
    return true;
}
function PkiGenerateKmsKeyRequestFromJSON(json) {
    return PkiGenerateKmsKeyRequestFromJSONTyped(json, false);
}
function PkiGenerateKmsKeyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'keyBits': json['key_bits'] == null ? undefined : json['key_bits'],
        'keyName': json['key_name'] == null ? undefined : json['key_name'],
        'keyType': json['key_type'] == null ? undefined : json['key_type'],
        'managedKeyId': json['managed_key_id'] == null ? undefined : json['managed_key_id'],
        'managedKeyName': json['managed_key_name'] == null ? undefined : json['managed_key_name'],
    };
}
function PkiGenerateKmsKeyRequestToJSON(json) {
    return PkiGenerateKmsKeyRequestToJSONTyped(json, false);
}
function PkiGenerateKmsKeyRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'key_bits': value['keyBits'],
        'key_name': value['keyName'],
        'key_type': value['keyType'],
        'managed_key_id': value['managedKeyId'],
        'managed_key_name': value['managedKeyName'],
    };
}
