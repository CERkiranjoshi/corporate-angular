import { BrowserModule } from '@angular/platform-browser';
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ArticleComponent } from './article/article.component';
import { ResearchComponent } from './research/research.component';
import {
  AccordionModule,
  AlertModule,
  BsDropdownModule,
  TooltipModule,
  DatepickerModule,
  TimepickerModule,
  ProgressbarModule,
  ModalModule, ModalDirective
} from 'ngx-bootstrap';

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
    BrowserModule,
    AppRoutingModule,
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    DatepickerModule.forRoot(),
    TimepickerModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot()
  ],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
