import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {DisqusModule} from 'ngx-disqus';
import {AppRoutingModule} from './module/app-routing.module';
import {GlobalDataService} from './service/globaldata.service';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {ArticleComponent} from './component/archive/article/article.component';
import {ArchiveComponent} from './component/archive/archive.component';
import { LinkComponent } from './component/archive/widget/link/link.component';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    DisqusModule.forRoot('TsukiBlog')
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ArticleComponent,
    ArchiveComponent,
    LinkComponent,
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
