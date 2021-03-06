import { Counter, initialState } from "./counter.state";

import { increment, decrement, reset, customIncrement, changeTopic } from "./counter.action";
import { Action, createReducer, on } from "@ngrx/store";

const _counterReducer = createReducer(
    initialState,

    on(increment, (state) => {
      return{
          ...state,
          counter : state.counter + 1
      }
    }),

    on(decrement, (state) => {
        return{
            ...state,
            counter : state.counter - 1
        }
      }),

      on(reset, (state) => {
        return{
            ...state,
            counter : 0
        }
      }),
      on(customIncrement, (state,action) =>{
        console.log(action)
        return{
          ...state,
          counter: state.counter + action.value
        }
      }),
      on(changeTopic, (state, action) =>{
        return{
          ...state,
          topic: action.topic
        }
      })
)

export function counterReducer(state: Counter | undefined, action: Action){
    return _counterReducer(state,action);
}
