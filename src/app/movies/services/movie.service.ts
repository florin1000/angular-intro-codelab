import { Injectable } from '@angular/core';
import { Movie } from '../model/movie';
import { HttpClient } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { MoviesModule } from '../movies.module';

@Injectable()
export class MovieService {
  private apiUrl = 'http://localhost:3000/movies';

  constructor(private http: HttpClient) {}


  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.apiUrl);
  }

  deleteMovie(movieId) {
    return this.http.delete(`${this.apiUrl}/${movieId}`);
  }

  updateComment(movieId, newComment) {
    return this.http
      .get(`${this.apiUrl}/${movieId}`).pipe(
        switchMap((movie) => {
          const updatedMovie = {...movie, comment: newComment};
          return this.http.patch(`${this.apiUrl}/${movieId}`, updatedMovie);
        })
      );
  }
}
