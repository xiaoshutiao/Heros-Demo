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
import { SortedVillainsComponent } from './pages/sorted-villains/sorted-villains.component';
import { VillainsBaseComponent } from './pages/villains-base/villains-base.component';
/* Service */
import { InMemoryDataService }  from './mock/in-memory-data.service';

import { httpInterceptorProviders } from './http-interceptors/index';
import { VillainBiosComponent } from './pages/villain-bios/villain-bios.component';
import { VillainBioComponent } from './pages/villain-bio/villain-bio.component';
import { VillainContactComponent } from './pages/villain-contact/villain-contact.component';
import { VillainBiosAndContactsComponent } from './pages/villain-bios-and-contacts/villain-bios-and-contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    SortedVillainsComponent,
    VillainsBaseComponent,
    VillainBiosComponent,
    VillainBioComponent,
    VillainContactComponent,
    VillainBiosAndContactsComponent
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
