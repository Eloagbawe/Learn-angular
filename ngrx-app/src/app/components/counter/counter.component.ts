import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment, decrement, reset } from '../../store/counter.action';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
 
  //counter$!: Observable<number>;
  //counter: number = 4;

  counter$!: number;
  constructor(private store: Store<{counter: {counter: number}}>) { 

    this.store.select('counter').subscribe((data) => {
      this.counter$ = data.counter
    })
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
}
