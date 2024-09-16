// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'vertical',
        loadComponent: () => import('./theme-vertical/theme-vertical.component')
      },
      {
        path: 'horizontal',
        loadComponent: () => import('./theme-horizontal/theme-horizontal.component')
      },
      {
        path: 'compact',
        loadComponent: () => import('./theme-compact/theme-compact.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
