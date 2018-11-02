import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieItemComponent } from './components/movie-item/movie-item.component';

import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MovieListComponent } from '../movies/components/movie-list/movie-list.component';
export const ROUTES: Routes = [
  {
    path: 'movies',
    component: MovieListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
  ],
  declarations: [MovieItemComponent, MovieListComponent],
})
export class MoviesModule {}
