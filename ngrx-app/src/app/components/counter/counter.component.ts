import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Counter } from 'src/app/store/counter.state';
import { increment, decrement, reset, customIncrement } from '../../store/counter.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
 
  value!: number;
  counter$!: Observable<Counter>;
  
  counterSubscription!: Subscription
  constructor(private store: Store<{counter: Counter}>) { 
    this.counter$ = this.store.select('counter')
  }

  ngOnInit(): void {
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

  onAdd(){
    this.store.dispatch(customIncrement({value: +this.value}))
    
  }
}
