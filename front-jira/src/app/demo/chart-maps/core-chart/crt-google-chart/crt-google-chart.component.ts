// Angular import
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/theme/shared/shared.module';

// third Party
import { Ng2GoogleChartsModule } from 'ng2-google-charts';

@Component({
  selector: 'app-crt-google-chart',
  standalone: true,
  imports: [CommonModule, SharedModule, Ng2GoogleChartsModule],
  templateUrl: './crt-google-chart.component.html',
  styleUrls: ['./crt-google-chart.component.scss']
})
export default class CrtGoogleChartComponent implements OnInit {
  // private Props
  areaChartData!: object;
  stackingAreaChartData!: object;
  barChartData!: object;
  bubbleChartData!: object;
  comboChartData!: object;
  donutChartData!: object;
  explodingChartData!: object;
  sliceChartData!: object;
  candlestickChartData!: object;
  waterfallChartData!: object;
  geoChartData!: object;
  vegaChartData!: object;
  timelineChartData!: object;

  // Life cycle events
  ngOnInit() {
    this.areaChartData = {
      chartType: 'AreaChart',
      dataTable: [
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
      ],
      options: {
        vAxis: { minValue: 0 },
        colors: ['#2196f3', '#673ab7'],
        height: 300
      }
    };

    this.stackingAreaChartData = {
      chartType: 'AreaChart',
      dataTable: [
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
      ],
      options: {
        isStacked: true,
        height: 300,
        legend: { position: 'top', maxLines: 3 },
        vAxis: { minValue: 0 },
        colors: ['#2196f3', '#20c997']
      }
    };

    this.barChartData = {
      chartType: 'BarChart',
      dataTable: [
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
      ],
      options: {
        height: 300,
        title: 'Population of Largest U.S. Cities',
        chartArea: { width: '50%' },
        isStacked: true,
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        },
        colors: ['#673ab7', '#2196f3']
      }
    };

    this.bubbleChartData = {
      chartType: 'BubbleChart',
      dataTable: [
        ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
        ['CAN', 80.66, 1.67, 'North America', 33739900],
        ['DEU', 79.84, 1.36, 'Europe', 81902307],
        ['DNK', 78.6, 1.84, 'Europe', 5523095],
        ['EGY', 72.73, 2.78, 'Middle East', 79716203],
        ['GBR', 80.05, 2, 'Europe', 61801570],
        ['IRN', 72.49, 1.7, 'Middle East', 73137148],
        ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
        ['ISR', 81.55, 2.96, 'Middle East', 7485600],
        ['RUS', 68.6, 1.54, 'Europe', 141850000],
        ['USA', 78.09, 2.05, 'North America', 307007000]
      ],
      options: {
        height: 300,
        title: 'Correlation between life expectancy, fertility rate ' + 'and population of some world countries (2010)',
        hAxis: { title: 'Life Expectancy' },
        vAxis: { title: 'Fertility Rate' },
        bubble: { textStyle: { fontSize: 11 } },
        colors: ['#2196f3', '#673ab7', '#20c997']
      }
    };

    this.candlestickChartData = {
      chartType: 'CandlestickChart',
      dataTable: [
        ['Mon', 20, 28, 38, 45],
        ['Tue', 31, 38, 55, 66],
        ['Wed', 50, 55, 77, 80],
        ['Thu', 77, 77, 66, 50],
        ['Fri', 68, 66, 22, 15]
      ],
      firstRowIsData: true,
      options: {
        height: 300,
        legend: 'none',
        bar: { groupWidth: '100%' }, // Remove space between bars.
        candlestick: {
          fallingColor: { strokeWidth: 0, fill: '#2196f3' }, // red
          risingColor: { strokeWidth: 0, fill: '#673ab7' } // green
        }
      }
    };

    this.geoChartData = {
      chartType: 'GeoChart',
      dataTable: [
        ['Country', 'Population (2019)'],
        ['Austria', 8858775],
        ['Belgium', 11467923],
        ['Bulgaria', 7000039],
        ['Croatia', 4076246],
        ['Cyprus', 875898],
        ['Czech Republic', 10649800],
        ['Denmark', 5806081],
        ['Estonia', 1324820],
        ['Finland', 5517919],
        ['France', 67028048],
        ['Germany', 83019214],
        ['Greece', 10722287],
        ['Hungary', 9797561],
        ['Ireland', 4904226],
        ['Italy', 60359546],
        ['Latvia', 1919968],
        ['Lithuania', 2794184],
        ['Luxembourg', 613894],
        ['Malta', 493559],
        ['Netherlands', 17282163],
        ['Poland', 37972812],
        ['Portugal', 10276617],
        ['Romania', 19401658],
        ['Slovakia', 5450421],
        ['Slovenia', 2080908],
        ['Spain', 46934632],
        ['Sweden', 10230185]
      ],
      options: {
        region: '150', // Europe
        height: 300,
        colorAxis: { colors: ['#04a9f5', '#1de9b6', '#f44236'] },
        backgroundColor: '#9cf',
        datalessRegionColor: '#f8f9fa',
        defaultColor: '#3ebfea'
      }
    };

    this.timelineChartData = {
      chartType: 'Timeline',
      dataTable: [
        ['Name', 'From', 'To'],
        ['Washington', new Date(1789, 3, 30), new Date(1797, 2, 4)],
        ['Adams', new Date(1797, 2, 4), new Date(1801, 2, 4)],
        ['Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4)]
      ],
      options: {
        colors: ['#2196f3', '#673ab7', '#20c997']
      }
    };

    this.comboChartData = {
      chartType: 'ComboChart',
      dataTable: [
        ['Month', 'Bolivia', 'Ecuador', 'Madagascar', 'Papua New Guinea', 'Rwanda', 'Average'],
        ['2004/05', 165, 938, 522, 998, 450, 614.6],
        ['2005/06', 135, 1120, 599, 1268, 288, 682],
        ['2006/07', 157, 1167, 587, 807, 397, 623],
        ['2007/08', 139, 1110, 615, 968, 215, 609.4],
        ['2008/09', 136, 691, 629, 1026, 366, 569.6]
      ],
      options: {
        height: 300,
        title: 'Monthly Coffee Production by Country',
        vAxis: {
          title: 'Cups'
        },
        hAxis: {
          title: 'Month'
        },
        seriesType: 'bars',
        series: {
          5: {
            type: 'line'
          }
        },
        colors: ['#04a9f5', '#673ab7', '#2196f3', '#20c997', '#A389D4', '#3ebfea']
      }
    };

    this.donutChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ],
      options: {
        height: 300,
        title: 'My Daily Activities',
        pieHole: 0.4,
        colors: ['#1dc4e9', '#673ab7', '#3ebfea', '#A389D4', '#899FD4']
      }
    };

    this.vegaChartData = {
      chartType: 'VegaChart',
      dataTable: [],
      options: {
        vegaLite: {
          $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
          description: 'Plots two functions using a generated sequence.',
          width: 300,
          height: 150,
          data: {
            sequence: {
              start: 0,
              stop: 12.7,
              step: 0.1,
              as: 'x'
            }
          },
          transform: [
            {
              calculate: 'sin(datum.x)',
              as: 'sin(x)'
            },
            {
              calculate: 'cos(datum.x)',
              as: 'cos(x)'
            },
            {
              fold: ['sin(x)', 'cos(x)']
            }
          ],
          mark: 'line',
          encoding: {
            x: {
              type: 'quantitative',
              field: 'x'
            },
            y: {
              field: 'value',
              type: 'quantitative'
            },
            color: {
              field: 'key',
              type: 'nominal',
              title: null
            }
          }
        }
      }
    };

    this.explodingChartData = {
      chartType: 'PieChart',
      dataTable: [
        ['Language', 'Speakers (in millions)'],
        ['Assamese', 13],
        ['Bengali', 83],
        ['Bodo', 1.4],
        ['Dogri', 2.3],
        ['Gujarati', 46],
        ['Hindi', 300],
        ['Kannada', 38],
        ['Kashmiri', 5.5],
        ['Konkani', 5],
        ['Maithili', 20],
        ['Malayalam', 33],
        ['Manipuri', 1.5],
        ['Marathi', 72],
        ['Nepali', 2.9],
        ['Oriya', 33]
      ],
      options: {
        height: 300,
        title: 'Indian Language Use',
        legend: 'none',
        pieSliceText: 'label',
        slices: {
          4: { offset: 0.2 },
          12: { offset: 0.3 },
          14: { offset: 0.4 },
          15: { offset: 0.5 }
        },
        colors: ['#04a9f5', '#673ab7', '#1dc4e9', '#FE8A7D', '#A389D4', '#2196f3']
      }
    };
  }
}
