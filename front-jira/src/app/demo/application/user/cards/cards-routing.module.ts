// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'styleV1',
        loadComponent: () => import('./card-style-v1/card-style-v1.component')
      },
      {
        path: 'styleV2',
        loadComponent: () => import('./card-style-v2/card-style-v2.component')
      },
      {
        path: 'styleV3',
        loadComponent: () => import('./card-style-v3/card-style-v3.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule {}
