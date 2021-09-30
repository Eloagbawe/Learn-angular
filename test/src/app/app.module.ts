import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { courseReducer } from './store/reducers/course.reducer';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotesComponent } from './notes/notes.component';
import { TestComponent } from './test/test.component';
import { AddNoteComponent } from './add-note/add-note.component';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TestComponent,
    AddNoteComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({
      //course: courseReducer,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
