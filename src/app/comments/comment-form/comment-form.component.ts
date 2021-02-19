import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Review } from '../comments.component';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.scss'],
})
export class CommentFormComponent implements OnInit {
  author = '';
  content = '';
  @Output() onAdd: EventEmitter<Review> = new EventEmitter<Review>();

  constructor() {}

  ngOnInit() {}

  addComment() {
    if (this.author.trim() && this.content.trim()) {
      const review: Review = {
        author: this.author,
        content: this.content,
      };
      this.onAdd.emit(review);
      this.author = this.content = '';
    }
  }
}
