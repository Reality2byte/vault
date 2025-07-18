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
 * @interface GroupLookUpRequest
 */
export interface GroupLookUpRequest {
    /**
     * ID of the alias.
     * @type {string}
     * @memberof GroupLookUpRequest
     */
    aliasId?: string;
    /**
     * Accessor of the mount to which the alias belongs to. This should be supplied in conjunction with 'alias_name'.
     * @type {string}
     * @memberof GroupLookUpRequest
     */
    aliasMountAccessor?: string;
    /**
     * Name of the alias. This should be supplied in conjunction with 'alias_mount_accessor'.
     * @type {string}
     * @memberof GroupLookUpRequest
     */
    aliasName?: string;
    /**
     * ID of the group.
     * @type {string}
     * @memberof GroupLookUpRequest
     */
    id?: string;
    /**
     * Name of the group.
     * @type {string}
     * @memberof GroupLookUpRequest
     */
    name?: string;
}
/**
 * Check if a given object implements the GroupLookUpRequest interface.
 */
export declare function instanceOfGroupLookUpRequest(value: object): value is GroupLookUpRequest;
export declare function GroupLookUpRequestFromJSON(json: any): GroupLookUpRequest;
export declare function GroupLookUpRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupLookUpRequest;
export declare function GroupLookUpRequestToJSON(json: any): GroupLookUpRequest;
export declare function GroupLookUpRequestToJSONTyped(value?: GroupLookUpRequest | null, ignoreDiscriminator?: boolean): any;
