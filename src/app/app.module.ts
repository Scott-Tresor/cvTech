import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ItemCvComponent } from './CvTech/item-cv/item-cv.component';
import { DetailCvComponent } from './CvTech/detail-cv/detail-cv.component';
import { ListeCvComponent } from './CvTech/liste-cv/liste-cv.component';
import { CvComponent } from './CvTech/cv/cv.component';
import { HeaderComponent } from './CvTech/header/header.component';
import { ImagePipe } from './CvTech/image.pipe';
import { EmbaucheComponent } from './CvTech/embauche/embauche.component';
import { Route } from './app.routing';
import { RouteurComponent } from './CvTech/routeur/routeur.component';
import { DetailComponent } from './CvTech/detail/detail.component';
import { AddComponent } from './CvTech/add/add.component';
import { DeleteComponent } from './CvTech/delete/delete.component';
import { ErrorComponent } from './CvTech/error/error.component';
import { ObservableComponent } from './observable/observable.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemCvComponent,
    DetailCvComponent,
    ListeCvComponent,
    CvComponent,
    HeaderComponent,
    ImagePipe,
    EmbaucheComponent,
    RouteurComponent,
    DetailComponent,
    AddComponent,
    DeleteComponent,
    ErrorComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Route
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
