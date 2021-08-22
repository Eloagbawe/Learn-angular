import { Component, OnInit } from '@angular/core';

import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.css'],
  template: `
    <swiper
      [slidesPerView]="3"
      [spaceBetween]="50"
      (swiper)="onSwiper($event)"
      (slideChange)="onSlideChange()"
      [navigation]="true"
      [pagination]="{ clickable: true }"
      [scrollbar]="{ draggable: true }"
    >
      <ng-template swiperSlide>Slide 1</ng-template>
      <ng-template swiperSlide>Slide 2</ng-template>
      <ng-template swiperSlide>Slide 3</ng-template>
      <ng-template swiperSlide>Slide 4</ng-template>
      <ng-template swiperSlide>Slide 5</ng-template>
      <ng-template swiperSlide>Slide 6</ng-template>
    </swiper>
  `,
})
export class SwiperComponent implements OnInit {

  onSlideChange() {
    console.log('slide change');
  }

  constructor() { }

  ngOnInit(): void {
  }

}

// export class SwiperComponent {
//   onSwiper(swiper) {
//     console.log(swiper);
//   }
//   onSlideChange() {
//     console.log('slide change');
//   }
// }