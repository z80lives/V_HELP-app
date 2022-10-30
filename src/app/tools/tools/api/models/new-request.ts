/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Request, 'id'>, schemaOptions: { title: 'NewRequest', exclude: [ 'id' ] })
 */
export interface NewRequest {
  description: string;
  requestDate: string;
  requestId?: string;
  requestStatus: string;

  [key: string]: any;
}
