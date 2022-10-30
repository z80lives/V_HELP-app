/* tslint:disable */
/* eslint-disable */
import { OfferWithRelations } from './offer-with-relations';

/**
 * (tsType: RequestWithRelations, schemaOptions: { includeRelations: true })
 */
export interface RequestWithRelations {
  description: string;
  id?: string;
  offers?: Array<OfferWithRelations>;
  requestDate: string;
  requestId?: string;
  requestStatus: string;

  [key: string]: any;
}
