/* tslint:disable */
/* eslint-disable */
import { ResourceRequestWithRelations } from './resource-request-with-relations';
import { TutorialRequestWithRelations } from './tutorial-request-with-relations';

/**
 * (tsType: SchoolWithRelations, schemaOptions: { includeRelations: true })
 */
export interface SchoolWithRelations {
  address: string;
  city: string;
  resourceRequests?: Array<ResourceRequestWithRelations>;
  schoolId?: string;
  schoolName: string;
  tutorialRequests?: Array<TutorialRequestWithRelations>;
}
