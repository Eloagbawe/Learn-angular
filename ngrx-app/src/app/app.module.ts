import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { galleryReducer } from './store/gallery.reducer';
import { GalleryService } from './components/gallery/gallery.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryEffect } from './components/gallery/gallery.effect';




@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ gallery: galleryReducer }),
    EffectsModule.forRoot([GalleryEffect])

  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
