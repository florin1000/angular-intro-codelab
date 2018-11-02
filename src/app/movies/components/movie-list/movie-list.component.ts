import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'ngi-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  movies$;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies$ = this.movieService.getMovies();
  }

  handleCommentUpdate(commentPayload) {
    this.movieService.updateComment(commentPayload.id, commentPayload.newComment)
      .subscribe();
  }

  handleMovieDelete(movieId) {
    this.movies$ = this.movieService.deleteMovie(movieId)
      .pipe(switchMap(res => this.movieService.getMovies()));
  }
}
