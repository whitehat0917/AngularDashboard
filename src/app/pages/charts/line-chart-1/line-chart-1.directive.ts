import * as d3 from 'd3';
import * as nv from 'nvd3';

import { Directive, OnInit, ElementRef } from '@angular/core';

import { BaseLineChartDirective } from 'theme/directives/line-chart.directive';

import { LineChart1Service } from './line-chart-1.service';

@Directive({
  selector: '[appLineChart1]',
  providers: [LineChart1Service],
})
export class LineChart1Directive extends BaseLineChartDirective {
  constructor(
    el: ElementRef,
    private lineChart1Service: LineChart1Service,
  ) {
    super(el);

    this.xAxis = 'X';
    this.yAxis = 'Y';
    this.maxX = 10;

    this.afterConfigure();

    this.animatedData = [
      {
        values: [],
        key: 'Sin(x)',
        color: '#03a9f4',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Cos(x+10)+1/2',
        color: '#f44336',
        fillOpacity: 0.00001,
        area: true,
      },
      {
        values: [],
        key: 'Cos(x)+1',
        color: '#7726d3',
        fillOpacity: 0.00001,
        area: true,
      },
    ];
    this.rawData = [
      [...lineChart1Service.getSinGraph(0, this.maxX + 1, this.xStep)],
      [...lineChart1Service.getFirstComplexGraph(0, this.maxX + 1, this.xStep)],
      [...lineChart1Service.getSecondComplexGraph(0, this.maxX + 1, this.xStep)],
    ];
  }
}
