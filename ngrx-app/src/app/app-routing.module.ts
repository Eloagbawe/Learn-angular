import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  {
    path: "",
    component:CounterComponent
  },

  {
    path: "gallery",
    component: GalleryComponent
  },
  {
    path: "counter",
    component: CounterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
