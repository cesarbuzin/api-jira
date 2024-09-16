// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'price-1',
        loadComponent: () => import('./price-v1/price-v1.component')
      },
      {
        path: 'price-2',
        loadComponent: () => import('./price-v2/price-v2.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceRoutingModule {}
