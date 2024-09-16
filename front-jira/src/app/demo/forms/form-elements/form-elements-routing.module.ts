// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basic',
        loadComponent: () => import('./forms-basic/forms-basic.component')
      },
      {
        path: 'advance',
        loadChildren: () => import('./form-advance/form-advance.module').then((m) => m.FormAdvanceModule)
      },
      {
        path: 'validation',
        loadComponent: () => import('./forms-validation/forms-validation.component')
      },
      {
        path: 'masking',
        loadComponent: () => import('./forms-masking/forms-masking.component')
      },
      // todo: waiting for pr complete after update this package  https://github.com/madoar/angular-archwizard/pull/389
      // {
      //   path: 'wizard',
      //   loadChildren: () => import('./form-wizard/form-wizard.module').then((m) => m.FormWizardModule)
      // },
      {
        path: 'picker',
        loadComponent: () => import('./forms-picker/forms-picker.component')
      },
      {
        path: 'select',
        loadComponent: () => import('./forms-select/forms-select.component')
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormElementsRoutingModule {}
