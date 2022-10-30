/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AuthControllerService } from './services/auth-controller.service';
import { PingControllerService } from './services/ping-controller.service';
import { RequestsControllerService } from './services/requests-controller.service';
import { RequestOfferControllerService } from './services/request-offer-controller.service';
import { ResourceRequestsControllerService } from './services/resource-requests-controller.service';
import { SchoolAdminControllerService } from './services/school-admin-controller.service';
import { SchoolAdminSchoolControllerService } from './services/school-admin-school-controller.service';
import { SchoolControllerService } from './services/school-controller.service';
import { SchoolResourceRequestControllerService } from './services/school-resource-request-controller.service';
import { SchoolTutorialRequestControllerService } from './services/school-tutorial-request-controller.service';
import { TutorialsRequestsControllerService } from './services/tutorials-requests-controller.service';
import { VolunteerControllerService } from './services/volunteer-controller.service';
import { VolunteerOfferControllerService } from './services/volunteer-offer-controller.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AuthControllerService,
    PingControllerService,
    RequestsControllerService,
    RequestOfferControllerService,
    ResourceRequestsControllerService,
    SchoolAdminControllerService,
    SchoolAdminSchoolControllerService,
    SchoolControllerService,
    SchoolResourceRequestControllerService,
    SchoolTutorialRequestControllerService,
    TutorialsRequestsControllerService,
    VolunteerControllerService,
    VolunteerOfferControllerService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
