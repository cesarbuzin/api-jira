// Angular Import
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// project import
// eslint-disable-next-line
declare let $: any;
import '../../../../../../node_modules/peity/jquery.peity.min.js';

@Component({
  selector: 'app-crt-piety',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './crt-piety.component.html',
  styleUrls: ['./crt-piety.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export default class CrtPietyComponent implements OnInit {
  // Life cycle events
  ngOnInit() {
    $('.bar-colours-1').peity('bar', {
      fill: ['rgba(79, 195, 247, 0.65)', 'rgba(51, 219, 158, 0.65)'],
      width: '100%',
      height: '150px'
    });

    $('.bar-colours-2').peity('bar', {
      fill: ['rgba(79, 195, 247, 0.65)', 'rgba(240, 70, 107, 0.65)'],
      width: '100%',
      height: '150px'
    });

    const updatingChart = $('.updating-chart').peity('line', {
      fill: 'rgba(240, 70, 107, 0.4)',
      stroke: 'rgb(240, 70, 107)',
      width: '100%',
      height: '150px'
    });

    setInterval(function () {
      const random = Math.round(Math.random() * 10);
      const values = updatingChart.text().split(',');
      values.shift();
      values.push(random);

      updatingChart.text(values.join(',')).change();
    }, 1000);

    $('.data-attributes span').peity('donut');

    $('span.pie_1').peity('pie', {
      fill: ['#f0466b', '#4fc3f7'],
      width: '16px',
      height: '16px'
    });
    $('span.pie_2').peity('pie', {
      fill: ['#ff8a65', '#33db9e'],
      width: '16px',
      height: '16px'
    });
    $('span.pie_3').peity('pie', {
      fill: ['#4fc3f7', '#536dfe'],
      width: '16px',
      height: '16px'
    });
    $('span.pie_4').peity('pie', {
      fill: ['#33db9e', '#f0466b'],
      width: '16px',
      height: '16px'
    });
    $('span.pie_5').peity('pie', {
      fill: ['#ff8a65', '#4fc3f7'],
      width: '16px',
      height: '16px'
    });
    $('span.pie_6').peity('pie', {
      fill: ['#f0466b', '#536dfe'],
      width: '16px',
      height: '16px'
    });
    $('span.pie_7').peity('pie', {
      fill: ['#33db9e', '#ff8a65'],
      width: '16px',
      height: '16px'
    });
  }
}
