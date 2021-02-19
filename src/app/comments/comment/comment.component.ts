import { Component, Input, ViewChild } from '@angular/core';
import { Review } from '../comments.component';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() review: Review;

  constructor() {}
}
