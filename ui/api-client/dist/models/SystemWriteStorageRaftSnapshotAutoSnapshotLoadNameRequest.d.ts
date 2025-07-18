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
 * @interface SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest
 */
export interface SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest {
    /**
     * URL pointing to the snapshot stored in cloud storage
     * @type {string}
     * @memberof SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest
     */
    url?: string;
}
/**
 * Check if a given object implements the SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest interface.
 */
export declare function instanceOfSystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest(value: object): value is SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequestFromJSON(json: any): SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequestToJSON(json: any): SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest;
export declare function SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequestToJSONTyped(value?: SystemWriteStorageRaftSnapshotAutoSnapshotLoadNameRequest | null, ignoreDiscriminator?: boolean): any;
