// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'customerList',
        loadComponent: () => import('./customer-list/customer-list.component')
      },
      {
        path: 'orderList',
        loadComponent: () => import('./order-list/order-list.component')
      },
      {
        path: 'createInvoice',
        loadComponent: () => import('./create-invoice/create-invoice.component')
      },
      {
        path: 'orderDetails',
        loadChildren: () => import('./order-details/order-details.module').then((m) => m.OrderDetailsModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then((m) => m.ProductModule)
      },
      {
        path: 'productReview',
        loadComponent: () => import('./product-review/product-review.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {}
