import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes';
import { HeroDetailComponent } from './components/hero-detail';
import { MessagesComponent } from './components/messages';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './components/dashboard';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
