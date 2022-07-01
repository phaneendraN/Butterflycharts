import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighchartsChartComponent } from 'highcharts-angular';
import { ButterflychartComponent } from './components/butterflychart/butterflychart.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng4-charts';
import { HorizantalbarchartComponent } from './components/horizantalbarchart/horizantalbarchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HighchartsChartComponent,
    ButterflychartComponent,
    ProgressbarComponent,
    HorizantalbarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
