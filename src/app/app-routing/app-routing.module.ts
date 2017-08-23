import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from '../article/article.component';


const appRoutes: Routes = [
  {path: '', component: ArticleComponent},
  {path: 'about', component: ArticleComponent},
  {path: 'archives', component: ArticleComponent},
  {path: 'tags', component: ArticleComponent},
  {path: 'picture', component: ArticleComponent},
  {path: 'works', component: ArticleComponent},
  {path: '**', component: ArticleComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: true}),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
