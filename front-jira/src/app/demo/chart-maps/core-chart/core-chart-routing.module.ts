// Angular Imports
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex-chart',
        loadComponent: () => import('./apex-chart/apex-chart.component')
      },
      {
        path: 'e-chart',
        loadChildren: () => import('./e-chart/e-chart.module').then((m) => m.EChartModule)
      },
      {
        path: 'google-chart',
        loadComponent: () => import('./crt-google-chart/crt-google-chart.component')
      },
      // {
      //   path: 'high-chart',
      //   loadComponent: () => import('./crt-high-chart/crt-high-chart.component')
      // },
      {
        path: 'piety',
        loadComponent: () => import('./crt-piety/crt-piety.component')
      },
      {
        path: 'radial',
        loadComponent: () => import('./crt-radial/crt-radial.component')
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreChartRoutingModule {}
