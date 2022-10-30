/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: @loopback/repository-json-schema#Optional<Omit<Offer, '_id'>, 'volunteerId'>, schemaOptions: { title: 'NewOfferInVolunteer', exclude: [ '_id' ], optional: [ 'volunteerId' ] })
 */
export interface NewOfferInVolunteer {
  offerDate: string;
  offerStatus: string;
  remarks: string;
  requestId?: string;
  volunteerId?: string;
}
