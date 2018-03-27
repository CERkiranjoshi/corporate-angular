import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ResearchComponent } from './research/research.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    HomeComponent,
    ArticleComponent,
    ResearchComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
