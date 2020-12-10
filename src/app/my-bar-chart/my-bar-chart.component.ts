import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './my-bar-chart.component.html',
  styleUrls: ['./my-bar-chart.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines : false,
    responsive: true,
  };
  public barChartLabels = ['100', '522', '44', '8787', '777'];
  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    { data: [1, 2, 3, 3, 1, 2, 3], label : ' series A' },
    { data: [1, 2, 3, 3, 1, 2, 3, 3], label : ' series B' }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
