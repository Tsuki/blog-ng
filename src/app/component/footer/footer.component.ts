import {Component, OnInit} from '@angular/core';
import {GlobalDataService} from '../../service/globaldata.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.styl']
})
export class FooterComponent implements OnInit {
  github_url: string;
  google_plus_url: string;
  facebook_url: string;

  constructor(private gd: GlobalDataService) {
    this.github_url = gd.github_url;
    this.google_plus_url = gd.google_plus_url;
    this.facebook_url = gd.facebook_url;
  }

  ngOnInit() {
  }

}
