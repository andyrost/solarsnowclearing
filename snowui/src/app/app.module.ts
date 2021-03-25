import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BarreComponent } from './modules/barre/barre.component';
import { BrandonComponent } from './modules/brandon/brandon.component';
import { StAlbansComponent } from './modules/st-albans/st-albans.component';
import { HomeComponent } from './core/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HistoryComponent } from './modules/history/history.component';
import { ManualCalculationComponent } from './modules/manual-calculation/manual-calculation.component';
import { NavComponent } from './core/nav/nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, Routes } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCloud, faCloudMeatball, faCloudMoon, faCloudMoonRain, faCloudRain, faCloudShowersHeavy, faCloudSun, faCloudSunRain, faMoon,faSmog,faSnowflake, faSun } from '@fortawesome/free-solid-svg-icons';
import { SiteTemplateComponent } from './modules/site-template/site-template.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BarreComponent,
    BrandonComponent,
    StAlbansComponent,
    HomeComponent,
    HistoryComponent,
    ManualCalculationComponent,
    NavComponent,
    SiteTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    RouterModule,
    MatButtonModule,
    MatListModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    FontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faCloud,faCloudMoon, faCloudMoonRain,faCloudShowersHeavy,faCloudRain,faCloudSun,faCloudSunRain,faMoon,faSnowflake,faSun,faCloudMeatball,faSmog)
  }
 }
