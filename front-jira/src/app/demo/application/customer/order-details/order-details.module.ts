// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { OrderDetailsRoutingModule } from './order-details-routing.module';
import { OrderDetailsComponent } from './order-details.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [OrderDetailsComponent, DetailsComponent],
  imports: [CommonModule, OrderDetailsRoutingModule, SharedModule]
})
export class OrderDetailsModule {}
