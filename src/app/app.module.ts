import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { StatisticsService } from './services/statistics.service';

import { AppComponent } from './app.component';
import { ExampleComponent } from './components/example/example.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,	
    HttpClientModule,
    HttpModule
  ],
  providers: [
    StatisticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
