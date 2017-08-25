import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.styl'],
})
export class ArchiveComponent implements OnInit {
  type: string;
  pageId: number;

  constructor(private route: ActivatedRoute) {
    const snapshot = this.route.snapshot;
    this.type = snapshot.data[0]['type'];
    if (this.type === 'post') {
      this.pageId = snapshot.params.get('id').toNumber();
    }
  }

  ngOnInit() {
  }

}
