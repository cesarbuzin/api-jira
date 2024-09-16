// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project Import
import { EChartRoutingModule } from './e-chart-routing.module';
import { EChartComponent } from './e-chart.component';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third Party
import { NgxEchartsModule } from 'ngx-echarts';
import * as echarts from 'echarts';

@NgModule({
  declarations: [EChartComponent],
  imports: [CommonModule, EChartRoutingModule, NgxEchartsModule.forRoot({ echarts }), SharedModule]
})
export class EChartModule {}
