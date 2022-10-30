/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<TutorialRequest>, schemaOptions: { partial: true })
 */
export interface TutorialRequestPartial {
  description?: string;
  id?: string;
  numStudents?: number;
  proposedDate?: string;
  proposedTime?: string;
  requestDate?: string;
  requestId?: string;
  requestStatus?: string;
  schoolId?: string;
  studentLevel?: string;

  [key: string]: any;
}
