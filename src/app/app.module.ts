import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CKEditorModule } from 'ng2-ckeditor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TexteditorComponent } from './texteditor/texteditor.component';
import { PagecontentComponent } from './pagecontent/pagecontent.component';
import { DetailspostComponent } from './detailspost/detailspost.component';

@NgModule({
  declarations: [
    AppComponent,
    TexteditorComponent,
    PagecontentComponent,
    DetailspostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
