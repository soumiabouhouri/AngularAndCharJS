import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {ChartsModule} from 'ng2-charts';
import { MyBarChartComponent } from './my-bar-chart/my-bar-chart.component';
import { MyRadarChartComponent } from './my-radar-chart/my-radar-chart.component';
import { MyPieChartComponent } from './my-pie-chart/my-pie-chart.component';
import { MyDoughnutChartComponent } from './my-doughnut-chart/my-doughnut-chart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from 'src/app/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MyBarChartComponent,
    MyRadarChartComponent,
    MyPieChartComponent,
    MyDoughnutChartComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    ChartsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
