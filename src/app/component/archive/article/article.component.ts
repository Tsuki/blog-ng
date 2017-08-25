import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import marked from 'marked';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  markdown: string;
  convertedData: string;
  type: string;
  pageId: number;
  date: Date;

  constructor(private route: ActivatedRoute) {
    const snapshot = this.route.snapshot;
    this.type = snapshot.data[0]['type'];
    if (this.type === 'post') {
      this.pageId = snapshot.params.get('id').toNumber();
    }
    // morking
    this.date = new Date();
    this.markdown = `hello
    - testing`;
  }

  ngOnInit() {
    this.convertedData = marked.parse(this.markdown);
  }
}
