// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'guestV1-login',
        loadComponent: () => import('./v1-login/v1-login.component')
      },
      {
        path: 'guestV1-register',
        loadComponent: () => import('./v1-register/v1-register.component')
      },
      {
        path: 'guestV1-forgetPassword',
        loadComponent: () => import('./v1-fr-password/v1-fr-password.component')
      },
      {
        path: 'guestV1-checkMail',
        loadComponent: () => import('./v1-check-mail/v1-check-mail.component')
      },
      {
        path: 'guestV1-resetpassword',
        loadComponent: () => import('./v1-reset-password/v1-reset-password.component')
      },
      {
        path: 'guestV1-codeVerification',
        loadComponent: () => import('./v1-code-verify/v1-code-verify.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationV1RoutingModule {}
