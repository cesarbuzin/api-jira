// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'error404',
        loadComponent: () => import('./maintain-error/maintain-error.component')
      },
      {
        path: 'comingSoon',
        loadChildren: () => import('./coming-soon/coming-soon.module').then((m) => m.ComingSoonModule)
      },
      {
        path: 'constructor',
        loadComponent: () => import('./under-constructor/under-constructor.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintenanceRoutingModule {}
