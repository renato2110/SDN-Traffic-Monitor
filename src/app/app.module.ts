import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StatisticsService } from './services/statistics.service';

import { AppComponent } from './app.component';
import { MacIpComponent } from './components/mac-ip/mac-ip.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PortsComponent } from './components/ports/ports.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AmChartsModule } from "amcharts3-angular2";


@NgModule({
  declarations: [
    AppComponent,
    MacIpComponent,
    FooterComponent,
    DashboardComponent,
    PortsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AmChartsModule
  ],
  providers: [
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
