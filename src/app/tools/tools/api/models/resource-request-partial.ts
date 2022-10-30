/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<ResourceRequest>, schemaOptions: { partial: true })
 */
export interface ResourceRequestPartial {
  description?: string;
  id?: string;
  numRequired?: number;
  requestDate?: string;
  requestId?: string;
  requestStatus?: string;
  resourceType?: string;
  schoolId?: string;

  [key: string]: any;
}
