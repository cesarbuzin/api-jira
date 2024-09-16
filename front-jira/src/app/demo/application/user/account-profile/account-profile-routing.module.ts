// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'profileOne',
        loadComponent: () => import('./profile-one/profile-one.component')
      },
      {
        path: 'profileTwo',
        loadComponent: () => import('./profile-two/profile-two.component')
      },
      {
        path: 'profileThree',
        loadComponent: () => import('./profile-three/profile-three.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountProfileRoutingModule {}
