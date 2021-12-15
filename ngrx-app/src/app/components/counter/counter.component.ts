import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Counter } from 'src/app/store/counter.state';
import { increment, decrement, reset } from '../../store/counter.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
 
  //counter$!: Observable<Counter>;
  //counter: number = 4;

  counter$!: number;
  counterSubscription!: Subscription
  constructor(private store: Store<{counter: Counter}>) { 
    this.counterSubscription = 
    this.store.select('counter').subscribe((data) => {
      this.counter$ = data.counter
    })
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(){
    if (this.counterSubscription){
      this.counterSubscription.unsubscribe();
    }
  }
  increment(){
     this.store.dispatch(increment())
  }

  decrement(){
     this.store.dispatch(decrement())
  }

  reset(){
    this.store.dispatch(reset())
  }
}
