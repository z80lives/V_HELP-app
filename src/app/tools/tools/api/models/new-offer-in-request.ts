/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Offer, '_id'>, 'requestId'>, schemaOptions: { title: 'NewOfferInRequest', exclude: [ '_id' ], optional: [ 'requestId' ] })
 */
export interface NewOfferInRequest {
  offerDate: string;
  offerStatus: string;
  remarks: string;
  requestId?: string;
  volunteerId?: string;
}
