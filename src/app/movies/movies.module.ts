import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '../material.module';

import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieListComponent } from '../movies/components/movie-list/movie-list.component';
import { RatingComponent } from '../movies/components/rating/rating.component';
import { MovieImageFallbackDirective } from '../movies/directives/movie-image-fallback.directive';
import { WordCountPipe } from './pipes/word-count.pipe';
import { MovieDetailComponent } from '../movies/components/movie-detail/movie-detail.component';
import { MovieService } from './services/movie.service';
import { MovieFormComponent } from '../movies/components/movie-form/movie-form.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: MovieListComponent,
  },
  {
    path: 'new',
    component: MovieDetailComponent
  },
  {
    path: ':id',
    component: MovieDetailComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [
    MovieItemComponent,
    MovieListComponent,
    RatingComponent,
    MovieImageFallbackDirective,
    WordCountPipe,
    MovieDetailComponent,
    MovieFormComponent,
  ],
  providers: [MovieService],
})
export class MoviesModule {}
