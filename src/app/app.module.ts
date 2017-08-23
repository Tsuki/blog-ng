import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {BodyComponent} from './body/body.component';
import {GlobalDataService} from './service/globaldata.service';
import { FooterComponent } from './footer/footer.component';
import { MobileNavComponent } from './mobile-nav/mobile-nav.component';
import { AfterFooterComponent } from './after-footer/after-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    MobileNavComponent,
    AfterFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
