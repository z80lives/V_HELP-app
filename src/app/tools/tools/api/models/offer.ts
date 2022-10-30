/* tslint:disable */

import { Volunteer } from './volunteer';

/* eslint-disable */
export interface Offer {
  _id?: string;
  offerDate: string;
  offerStatus: string;
  remarks: string;
  requestId?: string;
  volunteerId?: string;
  volunteer?: Volunteer;
}
