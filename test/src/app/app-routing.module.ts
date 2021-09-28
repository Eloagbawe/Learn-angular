import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: 'notes',
    component: NotesComponent
  },

  {
    path: 'test',
    component: TestComponent
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
