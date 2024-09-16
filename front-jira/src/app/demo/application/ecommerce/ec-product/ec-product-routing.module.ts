// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcProductComponent } from './ec-product.component';

const routes: Routes = [
  {
    path: '',
    component: EcProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcProductRoutingModule {}
