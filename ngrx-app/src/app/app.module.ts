import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { galleryReducer } from './store/gallery.reducer';
import { counterReducer } from './store/counter.reducer';
import { GalleryService } from './components/gallery/gallery.service';
import { GalleryComponent } from './components/gallery/gallery.component';
import { GalleryEffect } from './components/gallery/gallery.effect';
import { CounterComponent } from './components/counter/counter.component';




@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    CounterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ gallery: galleryReducer, counter: counterReducer}),
    EffectsModule.forRoot([GalleryEffect]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),

  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
