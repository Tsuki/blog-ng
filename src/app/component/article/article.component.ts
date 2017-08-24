import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  pageId: string;
  type: string;

  constructor(private  route: ActivatedRoute) {
    const snapshot = this.route.snapshot;
    this.type = snapshot.data[0]['type'];
    if (this.type === 'post') {
      this.pageId = snapshot.params.get('id');
    }

    console.log(`type :${this.type}`);
    console.log(`pageId :${this.pageId}`);
  }

  ngOnInit() {
  }

}
