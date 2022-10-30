/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<ResourceRequest, 'id'>, schemaOptions: { title: 'NewResourceRequest', exclude: [ 'id' ] })
 */
export interface NewResourceRequest {
  description: string;
  numRequired: number;
  requestDate: string;
  requestId?: string;
  requestStatus: string;
  resourceType: string;
  schoolId?: string;

  [key: string]: any;
}
