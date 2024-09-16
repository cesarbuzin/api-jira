// Angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChartDB } from 'src/fake-data/chartData';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';

// third party
import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ChartComponent,
  ApexStroke,
  ApexLegend,
  ApexMarkers,
  ApexYAxis,
  ApexTheme,
  ApexXAxis
} from 'ng-apexcharts';
import { CustomsThemeService } from 'src/app/theme/shared/service/customs-theme.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  stroke: ApexStroke;
  colors: string[];
  fill: ApexFill;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  tooltip: ApexTooltip;
  markers: ApexMarkers;
  labels: string[];
  legend: ApexLegend;
  theme: ApexTheme;
};
export type spark = {
  chart: ApexChart;
  series: ApexAxisChartSeries;
  stroke: ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  tooltip: ApexTooltip;
  colors: string[];
};

@Component({
  selector: 'app-widget-chart',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './widget-chart.component.html',
  styleUrls: ['./widget-chart.component.scss']
})
export default class WidgetChartComponent implements OnInit {
  // public props
  @ViewChild('accountChart') accountChart!: ChartComponent;
  chartOptions: Partial<ChartOptions>;
  ChartOptions_3: Partial<ChartOptions>;
  ChartOptions_2: Partial<ChartOptions>;
  ChartOptions_1: Partial<ChartOptions>;
  ChartOptions_4: Partial<ChartOptions>;
  ChartOptions_5: Partial<ChartOptions>;
  ChartOptions_6: Partial<ChartOptions>;
  ChartOptions_7: Partial<ChartOptions>;
  ChartOptions_8: Partial<ChartOptions>;
  ChartOptions_9: Partial<ChartOptions>;
  ChartOptions_10: Partial<ChartOptions>;
  ChartOptions_11: Partial<ChartOptions>;
  ChartOptions_12: Partial<ChartOptions>;
  ChartOptions_13: Partial<ChartOptions>;
  spark1: Partial<spark>;
  spark2: Partial<spark>;
  spark3: Partial<spark>;
  spark4: Partial<spark>;
  spark5: Partial<spark>;
  spark6: Partial<spark>;
  // eslint-disable-next-line
  chartDB: any;

  preset = ['#673ab7', '#2196f3', '#f44336'];
  conversionColor = ['#673ab7'];
  seoColor = ['#2196f3'];

  // Constructor
  constructor(private theme: CustomsThemeService) {
    this.chartDB = ChartDB;
    const {
      chartOptions,
      ChartOptions_1,
      ChartOptions_2,
      ChartOptions_3,
      ChartOptions_4,
      ChartOptions_5,
      ChartOptions_6,
      ChartOptions_7,
      ChartOptions_8,
      ChartOptions_9,
      ChartOptions_10,
      ChartOptions_11,
      ChartOptions_12,
      ChartOptions_13,
      spark1,
      spark2,
      spark3,
      spark4,
      spark5,
      spark6
    } = this.chartDB;
    this.chartOptions = chartOptions;
    this.ChartOptions_1 = ChartOptions_1;
    this.ChartOptions_2 = ChartOptions_2;
    this.ChartOptions_3 = ChartOptions_3;
    this.ChartOptions_4 = ChartOptions_4;
    this.ChartOptions_5 = ChartOptions_5;
    this.ChartOptions_6 = ChartOptions_6;
    this.ChartOptions_7 = ChartOptions_7;
    this.ChartOptions_8 = ChartOptions_8;
    this.ChartOptions_9 = ChartOptions_9;
    this.ChartOptions_10 = ChartOptions_10;
    this.ChartOptions_11 = ChartOptions_11;
    this.ChartOptions_12 = ChartOptions_12;
    this.ChartOptions_13 = ChartOptions_13;
    this.spark1 = spark1;
    this.spark2 = spark2;
    this.spark3 = spark3;
    this.spark4 = spark4;
    this.spark5 = spark5;
    this.spark6 = spark6;
  }

  // Life cycle events
  ngOnInit() {
    this.theme.customsTheme.subscribe((res) => {
      if (res == 'preset-1') {
        this.preset = ['#673ab7', '#f44336', '#1e88e5'];
        this.conversionColor = ['#673ab7'];
        this.seoColor = ['#2196f3'];
      }
      if (res == 'preset-2') {
        this.preset = ['#009688', '#d9534f', '#546e7a'];
        this.conversionColor = ['#009688'];
        this.seoColor = ['#607d8b'];
      }
      if (res == 'preset-3') {
        this.preset = ['#ec407a', '#d9534f', '#1c2f59'];
        this.conversionColor = ['#ec407a'];
        this.seoColor = ['#203461'];
      }
      if (res == 'preset-4') {
        this.preset = ['#c77e23', '#f44336', '#135152'];
        this.conversionColor = ['#c77e23'];
        this.seoColor = ['#16595a'];
      }
      if (res == 'preset-5') {
        this.preset = ['#3fb0ac', '#f44336', '#14383d'];
        this.conversionColor = ['#3fb0ac'];
        this.seoColor = ['#173e43'];
      }
      if (res == 'preset-6') {
        this.preset = ['#2ca58d', '#f44336', '#091f3c'];
        this.conversionColor = ['#2ca58d'];
        this.seoColor = ['#0a2342'];
      }
      if (res == 'preset-7') {
        this.preset = ['#3f51b5', '#f44336', '#3949ab'];
        this.conversionColor = ['#3f51b5'];
        this.seoColor = ['#3f51b5'];
      }
    });
  }
}
