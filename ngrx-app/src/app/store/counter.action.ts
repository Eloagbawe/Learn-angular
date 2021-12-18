import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');
export const customIncrement = createAction(
    '[Counter Component] CustomIncrement', 
    props<{value: number}>())
export const changeTopic = createAction(
    '[Counter Component] Change Topic',
    props<{topic: string}>()
)