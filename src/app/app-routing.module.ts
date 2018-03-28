import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { ArticleComponent } from './article/article.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'research', component: ResearchComponent},
  {path: 'article', component: ArticleComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
