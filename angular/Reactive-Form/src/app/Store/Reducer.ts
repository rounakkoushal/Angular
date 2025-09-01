import { createReducer, on } from '@ngrx/store';
import { AddReactiveFromDetail, RemoveReactiveFromDetail } from './Action';

export const initialStateOfReactiveData: Array<any> = []

export const reactiveFromDataReducer = createReducer(
    initialStateOfReactiveData,
    on(AddReactiveFromDetail, (state, {StoreReactiveFormDetail}) => [...state, StoreReactiveFormDetail]),
    on(RemoveReactiveFromDetail, (state, {Index}) => state.filter((_, index) => index !== Index))
);