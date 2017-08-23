import {Component, OnInit} from '@angular/core';
import {GlobalDataService} from '../../service/globaldata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.styl']
})
export class HeaderComponent implements OnInit {

  constructor(private gd: GlobalDataService) {
  }

  isActive: string;
  title = this.gd.title;
  subtitle = this.gd.subtitle;
  menus = this.gd.menus;

  ngOnInit() {
  }

  startSearchAnimation(element: HTMLSelectElement) {
    this.isActive = 'on';
    setTimeout(function () {
      element.focus();
    }, 200, this);
  }

  stopSearchAnimation() {
    this.isActive = 'off';
  }
}
