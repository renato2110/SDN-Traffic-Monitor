import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { StatisticsService } from './services/statistics.service';

import { AppComponent } from './app.component';
import { MacIpComponent } from './components/mac-ip/mac-ip.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    MacIpComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
