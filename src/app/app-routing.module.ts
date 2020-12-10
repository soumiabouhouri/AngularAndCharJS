import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MyBarChartComponent} from './my-bar-chart/my-bar-chart.component';
import {MyDoughnutChartComponent} from './my-doughnut-chart/my-doughnut-chart.component';
import {MyRadarChartComponent} from './my-radar-chart/my-radar-chart.component';
import {MyPieChartComponent} from './my-pie-chart/my-pie-chart.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'MyBarChartComponent', component: MyBarChartComponent },
  {path: 'MyDoughnutChartComponent', component: MyDoughnutChartComponent },
  {path: 'MyRadarChartComponent', component: MyRadarChartComponent},
  {path: 'MyPieChartComponent', component: MyPieChartComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
