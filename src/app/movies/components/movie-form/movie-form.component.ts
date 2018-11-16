import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Movie } from '../../model/movie';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'ngi-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  @Input() movieId;
  movieModel: Movie;

  constructor(private movieService: MovieService, private router: Router) { }

  ngOnInit() {
    this.movieService.getBook(this.movieId)
      .subscribe(movie => (this.movieModel = movie));
  }

  onSubmit() {
    if (this.movieModel.id) {
      this.movieService
        .updateMovie(this.movieModel)
        .pipe(first())
        .subscribe(this.goBack);
    } else {
      this.movieService
        .createMovie(this.movieModel)
        .pipe(first())
        .subscribe(this.goBack);
    }
  }

  goBack = () => {
    this.router.navigate(['/movies']);
  }
}
