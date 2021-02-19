import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export interface Review {
  author: string;
  content: any;
}

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
})
export class CommentsComponent {
  reviews: Review[] = [
    {
      author: 'Василий',
      content: `Благодарим всех сотрудников отеля за прекрасно
                        организованный отдых. Процветания вам!`,
    },
    {
      author: 'Сергей',
      content: `Добрый день. Отдыхали в этом отеле по рекомендации знакомых. Из плюсов
                        наверное только ухоженая территория и чистый пляж. Жили в ВИП номере на
                        первом этаже. Звукоизоляции нет и соседи сверху постоянно играли в футбол
                        нашими головами. По телеку 30 каналов новостей и все. Вечером делать нечего
                        кроме как бухать ( мы не пьем ). Столовая питание как в пионерском лагере
                        80 х годов. Единственное спасибо девочкам на рецепшн. Они старались как
                        могли, всячески помогая, но как говорится через голову не прыгнешь.`,
    },
    { author: 'Константин', content: `Благодарим всех сотрудников` },
    {
      author: 'Олег',
      content: `Благодарим всех сотрудников отеля за прекрасно
                        организованный отдых. Процветания вам!`,
    },
    {
      author: 'Федор',
      content: `Благодарим всех сотрудников отеля за прекрасно
                        организованный отдых. Процветания вам!`,
    },
    {
      author: 'Антон',
      content: `Благодарим всех сотрудников отеля за прекрасно
                        организованный отдых. Процветания вам!`,
    },
  ];

  constructor(private route: ActivatedRoute) {
    console.log(this.route);
  }

  updateComments(review: Review) {
    this.reviews.unshift(review);
  }
}
