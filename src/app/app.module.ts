import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
/* Module */
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdMobileModule } from 'ng-zorro-antd-mobile';
import { HeroSearchModule } from './components/hero-search/hero-search.module';
/* Component */
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroDetailComponent } from './pages/hero-detail/hero-detail.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MessagesComponent } from './components/messages/messages.component';
import { LoginComponent } from './pages/login/login.component';
/* Service */
import { InMemoryDataService }  from './mock/in-memory-data.service';

import { httpInterceptorProviders } from './http-interceptors/index';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeroSearchModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, 
      { 
        dataEncapsulation: false,
        passThruUnknownUrl: true
      }
    ),
    BrowserAnimationsModule,
    NgZorroAntdMobileModule
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
