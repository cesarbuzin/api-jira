// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'gRecaptcha',
        loadComponent: () => import('./re-captcha/re-captcha.component')
      },
      {
        path: 'clipboard',
        loadComponent: () => import('./clipboard/clipboard.component')
      },
      {
        path: 'switch',
        loadComponent: () => import('./frm-switch/frm-switch.component')
      },
      {
        path: 'typeAhead',
        loadComponent: () => import('./form-typeahead/form-typeahead.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormPluginRoutingModule {}
