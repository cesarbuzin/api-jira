import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EChartComponent } from './e-chart.component';

const routes: Routes = [
  {
    path: '',
    component: EChartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EChartRoutingModule {}
