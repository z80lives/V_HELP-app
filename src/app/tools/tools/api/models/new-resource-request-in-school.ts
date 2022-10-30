/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<ResourceRequest, 'id'>, 'schoolId'>, schemaOptions: { title: 'NewResourceRequestInSchool', exclude: [ 'id' ], optional: [ 'schoolId' ] })
 */
export interface NewResourceRequestInSchool {
  description: string;
  numRequired: number;
  requestDate: string;
  requestId?: string;
  requestStatus: string;
  resourceType: string;
  schoolId?: string;

  [key: string]: any;
}
