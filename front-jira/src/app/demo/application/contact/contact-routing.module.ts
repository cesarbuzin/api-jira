// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then((m) => m.CardsModule)
      },
      {
        path: 'list',
        loadComponent: () => import('./contact-list/contact-list.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
