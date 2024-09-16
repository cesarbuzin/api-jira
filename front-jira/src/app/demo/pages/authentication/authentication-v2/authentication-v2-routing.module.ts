// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'guestV2-login',
        loadComponent: () => import('./v2-login/v2-login.component')
      },
      {
        path: 'guestV2-register',
        loadComponent: () => import('./v2-register/v2-register.component')
      },
      {
        path: 'guestV2-forgetPassword',
        loadComponent: () => import('./v2-fr-password/v2-fr-password.component')
      },
      {
        path: 'guestV2-checkMail',
        loadComponent: () => import('./v2-check-mail/v2-check-mail.component')
      },
      {
        path: 'guestV2-resetpassword',
        loadComponent: () => import('./v2-reset-password/v2-reset-password.component')
      },
      {
        path: 'guestV2-codeVerification',
        loadComponent: () => import('./v2-code-verify/v2-code-verify.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationV2RoutingModule {}
