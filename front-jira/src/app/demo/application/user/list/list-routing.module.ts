// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'listStyleV1',
        loadComponent: () => import('./list-style-v1/list-style-v1.component')
      },
      {
        path: 'listStyleV2',
        loadComponent: () => import('./list-style-v2/list-style-v2.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListRoutingModule {}
