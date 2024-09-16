// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from '../product/product.component';
import { ProductContentComponent } from './product-content/product-content.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third party
import { DataTablesModule } from 'angular-datatables';
import { TagInputModule } from 'ngx-chips';

@NgModule({
  declarations: [ProductComponent, ProductContentComponent],
  imports: [CommonModule, ProductRoutingModule, SharedModule, DataTablesModule, TagInputModule]
})
export class ProductModule {}
