// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAdvanceComponent } from './form-advance.component';

const routes: Routes = [
  {
    path: '',
    component: FormAdvanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormAdvanceRoutingModule {}
