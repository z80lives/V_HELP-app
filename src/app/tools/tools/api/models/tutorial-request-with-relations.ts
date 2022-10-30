/* tslint:disable */
/* eslint-disable */
import { OfferWithRelations } from './offer-with-relations';

/**
 * (tsType: TutorialRequestWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TutorialRequestWithRelations {
  description: string;
  id?: string;
  numStudents: number;
  offers?: Array<OfferWithRelations>;
  proposedDate: string;
  proposedTime: string;
  requestDate: string;
  requestId?: string;
  requestStatus: string;
  schoolId?: string;
  studentLevel: string;

  [key: string]: any;
}
