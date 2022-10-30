/* tslint:disable */
/* eslint-disable */
export interface TutorialRequest {
  description: string;
  id?: string;
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
