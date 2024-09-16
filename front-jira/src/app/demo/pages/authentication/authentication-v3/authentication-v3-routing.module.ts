// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'guestV3-login',
        loadComponent: () => import('./v3-login/v3-login.component')
      },
      {
        path: 'guestV3-register',
        loadComponent: () => import('./v3-register/v3-register.component')
      },
      {
        path: 'guestV3-forgetPassword',
        loadComponent: () => import('./v3-fr-password/v3-fr-password.component')
      },
      {
        path: 'guestV3-checkMail',
        loadComponent: () => import('./v3-check-mail/v3-check-mail.component')
      },
      {
        path: 'guestV3-resetpassword',
        loadComponent: () => import('./v3-reset-password/v3-reset-password.component')
      },
      {
        path: 'guestV3-codeVerification',
        loadComponent: () => import('./v3-code-verify/v3-code-verify.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationV3RoutingModule {}
