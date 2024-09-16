// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ec-product',
        loadChildren: () => import('./ec-product/ec-product.module').then((m) => m.EcProductModule)
      },
      {
        path: 'ec-product-detail',
        loadComponent: () => import('./product-details/product-details.component')
      },
      {
        path: 'ec-product-list',
        loadComponent: () => import('./product-list/product-list.component')
      },
      {
        path: 'ec-checkout',
        loadChildren: () => import('./ec-checkout/ec-checkout.module').then((m) => m.EcCheckoutModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule {}
