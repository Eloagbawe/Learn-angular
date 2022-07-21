import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginationComponent } from './pagination.component';
import { TestComponent } from '../test/test.component';


const routes: Routes = [
  
  { path: '', component: PaginationComponent,
    children: [
      {
        path: 'test',
        component: TestComponent
      },
    ]

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginationRoutingModule { }
