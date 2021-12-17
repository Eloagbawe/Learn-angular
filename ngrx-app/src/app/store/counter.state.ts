export interface Counter{
    counter: number;
    topic: string
}
export const initialState: Counter =  {
    counter: 2,
    topic: "State Management with ngrx"
}