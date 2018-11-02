import { Component, Input, SimpleChanges, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ngi-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {
  @Output() commentUpdate = new EventEmitter();
  @Input() movie;
  commentSaved;
  movieComment;

  ngOnInit() {
    this.movieComment = this.movie.comment;
    this.commentSaved = this.movieComment.length > 0;
  }

  wordCount(movieComment) {
    let countValue;
    if (!movieComment || movieComment.length === 0) {
      countValue = 0;
    } else {
      countValue = movieComment
        .trim()
        .replace(/  +/g, ' ')
        .split(' ').length;
    }
    return `${countValue} words`;
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
}
