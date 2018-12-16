import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes';
import { HeroDetailComponent } from './components/hero-detail';
import { MessagesComponent } from './components/messages';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard';
import { InMemoryDataService } from './services';
import { HeroSearchComponent } from './hero-search/hero-search.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
