// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'guestV1',
        loadChildren: () => import('./authentication-v1/authentication-v1.module').then((m) => m.AuthenticationV1Module)
      },
      {
        path: 'guestV2',
        loadChildren: () => import('./authentication-v2/authentication-v2.module').then((m) => m.AuthenticationV2Module)
      },
      {
        path: 'guestV3',
        loadChildren: () => import('./authentication-v3/authentication-v3.module').then((m) => m.AuthenticationV3Module)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
