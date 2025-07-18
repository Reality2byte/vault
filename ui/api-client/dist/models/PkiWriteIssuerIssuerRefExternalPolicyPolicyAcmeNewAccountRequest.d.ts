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
 *
 * @export
 * @interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest
 */
export interface PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest {
    /**
     * ACME request 'payload' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest
     */
    payload?: string;
    /**
     * ACME request 'protected' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest
     */
    _protected?: string;
    /**
     * ACME request 'signature' value
     * @type {string}
     * @memberof PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest
     */
    signature?: string;
}
/**
 * Check if a given object implements the PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest interface.
 */
export declare function instanceOfPkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest(value: object): value is PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestFromJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestToJSON(json: any): PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest;
export declare function PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequestToJSONTyped(value?: PkiWriteIssuerIssuerRefExternalPolicyPolicyAcmeNewAccountRequest | null, ignoreDiscriminator?: boolean): any;
