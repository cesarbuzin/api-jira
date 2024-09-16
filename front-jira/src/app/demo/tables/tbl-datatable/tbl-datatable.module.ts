// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { TblDatatableRoutingModule } from './tbl-datatable-routing.module';
import { TblDatatableComponent } from './tbl-datatable.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { TblSearchingComponent } from './tbl-searching/tbl-searching.component';

// third party
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [TblDatatableComponent, TblSearchingComponent],
  imports: [CommonModule, TblDatatableRoutingModule, DataTablesModule, SharedModule]
})
export class TblDatatableModule {}
