// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { BorderTableComponent } from './border-table/border-table.component';
import { SizingTableComponent } from './sizing-table/sizing-table.component';
import { StylingTableComponent } from './styling-table/styling-table.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basicTable',
        component: BasicTableComponent
      },
      {
        path: 'sizingTable',
        component: SizingTableComponent
      },
      {
        path: 'borderTable',
        component: BorderTableComponent
      },
      {
        path: 'stylingTable',
        component: StylingTableComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TblBootstrapRoutingModule {}
