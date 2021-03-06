import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Counter } from "./counter.state";

const getCounterState = createFeatureSelector<Counter>('counter');

export const getCounter = createSelector(getCounterState, (state) =>{
    return state.counter
})

export const getTopic = createSelector(getCounterState, (state) =>{
    return state.topic
})