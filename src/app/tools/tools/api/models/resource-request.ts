/* tslint:disable */
/* eslint-disable */
export interface ResourceRequest {
  description: string;
  id?: string;
  numRequired: number;
  requestDate: string;
  requestId?: string;
  requestStatus: string;
  resourceType: string;
  schoolId?: string;

  [key: string]: any;
}
