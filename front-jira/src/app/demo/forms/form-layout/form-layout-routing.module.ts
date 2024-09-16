// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'layout',
        loadComponent: () => import('./forms-layouts/forms-layouts.component')
      },
      {
        path: 'actionBars',
        loadComponent: () => import('./form-actionbars/form-actionbars.component')
      },
      {
        path: 'multiColumn',
        loadComponent: () => import('./form-multicolumn/form-multicolumn.component')
      },
      {
        path: 'stickyBar',
        loadComponent: () => import('./sticky-actionbarn/sticky-actionbarn.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormLayoutRoutingModule {}
