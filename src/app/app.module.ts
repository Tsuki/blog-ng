import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {GlobalDataService} from './service/globaldata.service';
import {FooterComponent} from './footer/footer.component';
import {MobileNavComponent} from './mobile-nav/mobile-nav.component';
import {AfterFooterComponent} from './after-footer/after-footer.component';
import {RouterModule, Routes} from '@angular/router';
import {PostComponent} from './post/post.component';
import {PageComponent} from './page/page.component';

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
