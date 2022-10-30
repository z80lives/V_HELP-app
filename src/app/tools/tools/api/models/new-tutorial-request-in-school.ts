/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<TutorialRequest, 'id'>, 'schoolId'>, schemaOptions: { title: 'NewTutorialRequestInSchool', exclude: [ 'id' ], optional: [ 'schoolId' ] })
 */
export interface NewTutorialRequestInSchool {
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
