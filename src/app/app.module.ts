import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemCvComponent } from './CvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './CvTech/detail-cv/detail-cv.component';
import { ListeCvComponent } from './CvTech/liste-cv/liste-cv.component';
import { CvComponent } from './CvTech/cv/cv.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCvComponent,
    DetailCvComponent,
    ListeCvComponent,
    CvComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    ItemCvComponent,
    DetailCvComponent,
    ListeCvComponent,
    CvComponent,
  ]
})
export class AppModule { }
