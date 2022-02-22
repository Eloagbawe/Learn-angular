import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
// import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';



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
import { PaginationComponent } from './pagination/pagination.component';

// const config: SocketIoConfig = { url: 'http://localhost:8988', options: {} };

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    TestComponent,
    AddNoteComponent,
    PaginationComponent,
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // SocketIoModule.forRoot(config),
    StoreModule.forRoot({
      //course: courseReducer,
    }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
