import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { getCounter, getTopic } from 'src/app/store/counter.selector';
import { Counter } from 'src/app/store/counter.state';
import { increment, decrement, reset, customIncrement, changeTopic } from '../../store/counter.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
 
  value!: number;
  counter$!: Observable<number>;
  topic$!: Observable<string>;
  topicInput!:string;
  counterSubscription!: Subscription
  constructor(private store: Store<{counter: Counter}>) { 
    this.counter$ = this.store.select(getCounter)
  }

  ngOnInit(): void {
    this.topic$ = this.store.select(getTopic)
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

  changeTopic(){
    this.store.dispatch(changeTopic({topic: this.topicInput}))
    this.topicInput = ""
  }
}
