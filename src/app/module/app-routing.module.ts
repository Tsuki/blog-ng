import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticleComponent} from '../component/article/article.component';


const appRoutes: Routes = [
  {path: '', component: ArticleComponent, data: [{type: 'index'}], pathMatch: 'full'},
  {path: 'page/:id', component: ArticleComponent, data: [{type: 'index'}]},
  {path: 'about', component: ArticleComponent, data: [{type: 'page'}]},
  {path: 'archives', component: ArticleComponent, data: [{type: 'page'}]},
  {path: 'tags', component: ArticleComponent, data: [{type: 'page'}]},
  {path: 'picture', component: ArticleComponent, data: [{type: 'page'}]},
  {path: 'works', component: ArticleComponent, data: [{type: 'page'}]},
  {path: '**', component: ArticleComponent, data: [{type: 'page'}]}
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
