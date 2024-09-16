// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalenderRoutingModule } from './calender-routing.module';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalenderComponent } from './calender.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';

@NgModule({
  declarations: [CalenderComponent],
  imports: [
    CommonModule,
    CalenderRoutingModule,
    SharedModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ]
})
export class CalenderModule {}
