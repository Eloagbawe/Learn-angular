import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },

  {
    path: 'add-note',
    component: AddNoteComponent
  },

  {
    path: 'test',
    component: TestComponent
  },
  
  { path: 'pagination', loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule) }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
