import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Counter } from 'src/app/store/counter.state';
import { increment, decrement, reset, customIncrement, changeTopic } from '../../store/counter.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit{
 
  value!: number;
  counter$!: Observable<Counter>;
  topic!: string;
  topicInput!:string;
  counterSubscription!: Subscription
  constructor(private store: Store<{counter: Counter}>) { 
    this.counter$ = this.store.select('counter')
  }

  ngOnInit(): void {

    this.store.select('counter').subscribe((data)=>{
      this.topic = data.topic
    })
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
  }
}
