// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'socialProfile',
        loadChildren: () => import('./social-profile/social-profile.module').then((m) => m.SocialProfileModule)
      },
      {
        path: 'accountProfile',
        loadChildren: () => import('./account-profile/account-profile.module').then((m) => m.AccountProfileModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then((m) => m.CardsModule)
      },
      {
        path: 'list',
        loadChildren: () => import('./list/list.module').then((m) => m.ListModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
