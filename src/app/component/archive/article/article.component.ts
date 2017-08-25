import {Component, Input, OnInit} from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  @Input('data')
  data: string;
  convertedData: string;

  constructor() {
  }

  ngOnInit() {
    // const md = marked.setOptions({});
    // this.convertedData = md.parse(this.data);
  }
}
