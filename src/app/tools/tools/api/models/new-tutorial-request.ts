/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<TutorialRequest, 'id'>, schemaOptions: { title: 'NewTutorialRequest', exclude: [ 'id' ] })
 */
export interface NewTutorialRequest {
  description: string;
  numStudents: number;
  proposedDate: string;
  proposedTime: string;
  requestDate: string;
  requestId?: string;
  requestStatus: string;
  schoolId?: string;
  studentLevel: string;

  [key: string]: any;
}
