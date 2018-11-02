import { Component, Input, SimpleChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngi-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Output() commentUpdate = new EventEmitter();
  @Output() movieDelete = new EventEmitter();
  @Input() movie;
  commentSaved;
  movieComment;
  movieRating = 1;

  ngOnInit() {
    this.movieComment = this.movie.comment;
    this.commentSaved = this.movieComment.length > 0;
  }

  saveComment() {
    if (!this.commentSaved) {
      const payload = {
        id: this.movie.id,
        newComment: this.movieComment
      };
      this.commentUpdate.emit(payload);
    }
    this.commentSaved = !this.commentSaved;
  }

  handleDelete(movieId) {
    this.movieDelete.emit(movieId);
  }
}
