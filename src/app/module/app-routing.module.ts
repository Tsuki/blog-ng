import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArchiveComponent} from '../component/archive/archive.component';
import {environment} from '../../environments/environment';


const appRoutes: Routes = [
  {path: '', component: ArchiveComponent, data: [{type: 'index'}], pathMatch: 'full'},
  {path: 'page/:id', component: ArchiveComponent, data: [{type: 'index'}]},
  {path: 'about', component: ArchiveComponent, data: [{type: 'page'}]},
  {path: 'archives', component: ArchiveComponent, data: [{type: 'page'}]},
  {path: 'tags', component: ArchiveComponent, data: [{type: 'page'}]},
  {path: 'picture', component: ArchiveComponent, data: [{type: 'page'}]},
  {path: 'works', component: ArchiveComponent, data: [{type: 'page'}]},
  {path: '**', component: ArchiveComponent, data: [{type: 'page'}]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {enableTracing: !environment.production}),
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
