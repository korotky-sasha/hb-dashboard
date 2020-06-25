import { Component } from '@angular/core';

import { Article, Statistic } from "./shared/models/models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hb-dashboard';
  articles: Article[] = [
    {
      headline: 'Here is the Headline of the article. Lorem ipsum dolor sit amet, consecetuer adipiscing elit. ' +
        'Aenean commodo ligula.',
      date: new Date(2019, 7, 9),
      image_src: '/assets/img/Article1.png'
    },
    {
      headline: 'Here is the Headline that takes only one line.',
      date: new Date(2019, 7, 10),
      image_src: '/assets/img/Article2.png'
    },
    {
      headline: 'Here is another Headline of the article. Lorem ipsum dolor sit amet, consecetuer adipiscing elit. ' +
        'Aenean commodo ligula.',
      date: new Date(2019, 7, 12),
      image_src: '/assets/img/Article3.png'
    }
  ];

  statistics: Statistic[] = [
    {
      name: 'Employees',
      number: 3100,
      image_src: '/assets/img/Icon1.png',
      line_color: '#5e77ff'
    },
    {
      name: 'Contracts',
      number: 2558,
      image_src: '/assets/img/Icon2.png',
      line_color: '#bd5ee6'
    },
    {
      name: 'Documentations',
      number: 455,
      image_src: '/assets/img/Icon3.png',
      line_color: '#5e77ff'
    },
    {
      name: 'Consultations',
      number: 1200,
      image_src: '/assets/img/Icon4.png',
      line_color: '#f44336'
    }
  ];
}
