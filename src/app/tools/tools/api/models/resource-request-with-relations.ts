/* tslint:disable */
/* eslint-disable */
import { OfferWithRelations } from './offer-with-relations';

/**
 * (tsType: ResourceRequestWithRelations, schemaOptions: { includeRelations: true })
 */
export interface ResourceRequestWithRelations {
  description: string;
  id?: string;
  numRequired: number;
  offers?: Array<OfferWithRelations>;
  requestDate: string;
  requestId?: string;
  requestStatus: string;
  resourceType: string;
  schoolId?: string;

  [key: string]: any;
}
