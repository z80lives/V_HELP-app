/* tslint:disable */
/* eslint-disable */
import { OfferWithRelations } from './offer-with-relations';

/**
 * (tsType: VolunteerWithRelations, schemaOptions: { includeRelations: true })
 */
export interface VolunteerWithRelations {
  '_id'?: string;
  dateOfBirth: string;
  email: string;
  fullname: string;
  occupation: string;
  offers?: Array<OfferWithRelations>;
  password?: string;
  phone?: string;
  username: string;
}
