// angular import
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

// project import
import { SharedModule } from 'src/app/theme/shared/shared.module';
import { ChartDB } from 'src/fake-data/chartData';

// third party
import { NgApexchartsModule } from 'ng-apexcharts';

import {
  ApexAxisChartSeries,
  ApexNonAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexStroke,
  ApexLegend,
  ApexGrid,
  ApexMarkers,
  ApexAnnotations,
  ApexTheme,
  ApexTooltip
} from 'ng-apexcharts';
import { CustomsThemeService } from 'src/app/theme/shared/service/customs-theme.service';

export type ChartOptions = {
  series: ApexAxisChartSeries | ApexNonAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  responsive: ApexResponsive[];
  xaxis: ApexXAxis;
  yaxis: ApexYAxis | ApexYAxis[];
  colors: string[];
  labels: string[];
  tooltip: ApexTooltip;
  stroke: ApexStroke;
  fill: ApexFill;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
  grid: ApexGrid;
  markers: ApexMarkers;
  annotations: ApexAnnotations;
  theme: ApexTheme;
};

@Component({
  selector: 'app-apex-chart',
  standalone: true,
  imports: [CommonModule, SharedModule, NgApexchartsModule],
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.scss']
})
export default class ApexChartComponent implements OnInit {
  // private props
  @ViewChild('Chart') chart!: ChartComponent;
  columnChart!: Partial<ChartOptions>;
  barChart!: Partial<ChartOptions>;
  LineChart!: Partial<ChartOptions>;
  areaChart!: Partial<ChartOptions>;
  mixedChart!: Partial<ChartOptions>;
  radialChart!: Partial<ChartOptions>;
  polarChart!: Partial<ChartOptions>;
  pieChart!: Partial<ChartOptions>;

  // this color change with theme color change
  preset = ['#673ab7', '#2196f3', '#00c853'];
  barChartColor = ['#00c853'];
  lineChart = ['#2196f3'];
  areaColor = ['#2196f3', '#673ab7'];
  mixedColor = ['#2196f3', '#673ab7', '#00c853'];
  radialColor = ['#2196f3', '#673ab7', '#00c853', '#f44336'];
  polarColor = ['#2196f3', '#673ab7', '#00c853', '#f44336', '#ffc107', '#d84315'];

  // eslint-disable-next-line
  chartDB: any;

  constructor(private theme: CustomsThemeService) {
    this.chartDB = ChartDB;
    const { columnChart, barChart, LineChart, areaChart, pieChart, polarChart, mixedChart, radialChart } = this.chartDB;
    (this.columnChart = columnChart),
      (this.barChart = barChart),
      (this.LineChart = LineChart),
      (this.areaChart = areaChart),
      (this.mixedChart = mixedChart),
      (this.radialChart = radialChart),
      (this.polarChart = polarChart),
      (this.pieChart = pieChart);
  }

  ngOnInit(): void {
    this.theme.customsTheme.subscribe((res) => {
      if (res == 'preset-1') {
        this.preset = ['#673ab7', '#2196f3', '#00c853'];
        this.barChartColor = ['#00c853'];
        this.lineChart = ['#2196f3'];
        this.areaColor = ['#2196f3', '#673ab7'];
        this.mixedColor = ['#2196f3', '#673ab7', '#00c853'];
        this.radialColor = ['#2196f3', '#673ab7', '#00c853', '#f44336'];
        this.polarColor = ['#2196f3', '#673ab7', '#00c853', '#f44336', '#ffc107', '#d84315'];
      }
      if (res == 'preset-2') {
        this.preset = ['#607d8b', '#009688', '#64ba5f'];
        this.barChartColor = ['#64ba5f'];
        this.lineChart = ['#009688'];
        this.areaColor = ['#2196f3', '#607d8b'];
        this.mixedColor = ['#009688', '#607d8b', '#64ba5f'];
        this.radialColor = ['#009688', '#607d8b', '#64ba5f', '#d9534f'];
        this.polarColor = ['#009688', '#607d8b', '#64ba5f', '#d9534f', '#ec9c3d', '#d84315'];
      }
      if (res == 'preset-3') {
        this.preset = ['#203461', '#ec407a', '#14bb38'];
        this.barChartColor = ['#14bb38'];
        this.lineChart = ['#ec407a'];
        this.areaColor = ['#ec407a', '#203461'];
        this.mixedColor = ['#ec407a', '#203461', '#14bb38'];
        this.radialColor = ['#ec407a', '#203461', '#14bb38', '#d9534f'];
        this.polarColor = ['#ec407a', '#203461', '#14bb38', '#d9534f', '#ec9c3d', '#d84315'];
      }
      if (res == 'preset-4') {
        this.preset = ['#16595a', '#c77e23', '#00c853'];
        this.barChartColor = ['#00c853'];
        this.lineChart = ['#c77e23'];
        this.areaColor = ['#c77e23', '#16595a'];
        this.mixedColor = ['#c77e23', '#16595a', '#00c853'];
        this.radialColor = ['#c77e23', '#16595a', '#00c853', '#f44336'];
        this.polarColor = ['#c77e23', '#16595a', '#00c853', '#f44336', '#ec9c3d', '#d84315'];
      }
      if (res == 'preset-5') {
        this.preset = ['#173e43', '#3fb0ac', '#00c853'];
        this.barChartColor = ['#00c853'];
        this.lineChart = ['#3fb0ac'];
        this.areaColor = ['#3fb0ac', '#173e43'];
        this.mixedColor = ['#3fb0ac', '#173e43', '#00c853'];
        this.radialColor = ['#3fb0ac', '#173e43', '#00c853', '#f44336'];
        this.polarColor = ['#3fb0ac', '#173e43', '#00c853', '#f44336', '#ec9c3d', '#d84315'];
      }
      if (res == 'preset-6') {
        this.preset = ['#0a2342', '#2ca58d', '#00c853'];
        this.barChartColor = ['#00c853'];
        this.lineChart = ['#2ca58d'];
        this.areaColor = ['#2ca58d', '#0a2342'];
        this.mixedColor = ['#2ca58d', '#0a2342', '#00c853'];
        this.radialColor = ['#2ca58d', '#0a2342', '#00c853', '#f44336'];
        this.polarColor = ['#2ca58d', '#0a2342', '#00c853', '#f44336', '#ec9c3d', '#d84315'];
      }
      if (res == 'preset-7') {
        this.preset = ['#3f51b5', '#3f51b5', '#00c853'];
        this.barChartColor = ['#00c853'];
        this.lineChart = ['#3f51b5'];
        this.areaColor = ['#3f51b5', '#3f51b5'];
        this.mixedColor = ['#3f51b5', '#3f51b5', '#00c853'];
        this.radialColor = ['#3f51b5', '#3f51b5', '#00c853', '#f44336'];
        this.polarColor = ['#3f51b5', '#3f51b5', '#00c853', '#d9534f', '#ec9c3d', '#d84315'];
      }
    });
  }
}
