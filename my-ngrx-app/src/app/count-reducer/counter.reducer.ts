import { createAction, createReducer, on } from "@ngrx/store";

export const increment = createAction('[Counter Component] increment');

export const initialState:number = 0;
export const counterReducer = createReducer
(
    initialState,
    on(increment,(state)=> state+1)
)


