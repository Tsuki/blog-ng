import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {GlobalDataService} from './service/globaldata.service';
import {FooterComponent} from './component/footer/footer.component';
import {MobileNavComponent} from './component/mobile-nav/mobile-nav.component';
import {AfterFooterComponent} from './component/after-footer/after-footer.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './component/post/post.component';
import {PageComponent} from './component/page/page.component';

const appRoutes: Routes = [
  {path: '', component: PostComponent},
  {path: 'about', component: PageComponent},
  {path: 'archives', component: PageComponent},
  {path: 'tags', component: PageComponent},
  {path: 'picture', component: PageComponent},
  {path: 'works', component: PageComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MobileNavComponent,
    AfterFooterComponent,
    PostComponent,
    PageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [GlobalDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
