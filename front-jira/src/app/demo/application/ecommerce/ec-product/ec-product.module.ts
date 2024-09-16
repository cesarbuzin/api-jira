// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { EcProductRoutingModule } from './ec-product-routing.module';
import { EcProductComponent } from './ec-product.component';
import { FilterComponent } from './filter/filter.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

@NgModule({
  declarations: [EcProductComponent, FilterComponent],
  imports: [CommonModule, EcProductRoutingModule, SharedModule]
})
export class EcProductModule {}
