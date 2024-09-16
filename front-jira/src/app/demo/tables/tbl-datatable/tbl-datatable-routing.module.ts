// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TblDatatableComponent } from './tbl-datatable.component';

const routes: Routes = [
  {
    path: '',
    component: TblDatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblDatatableRoutingModule {}
