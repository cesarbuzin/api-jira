// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcCheckoutComponent } from './ec-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: EcCheckoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcCheckoutRoutingModule {}
