import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HomeModule } from './home/home.module';
import { MoviesModule } from './movies/movies.module';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'movies',
    loadChildren: './movies/movies.module#MoviesModule',
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    BrowserAnimationsModule,
    MaterialModule,
    HomeModule,
    // HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
