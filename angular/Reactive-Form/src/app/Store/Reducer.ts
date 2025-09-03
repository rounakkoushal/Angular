import { createReducer, on } from '@ngrx/store';
import { AddReactiveFromDetail, RemoveReactiveFromDetail, addItem, removeItem, clearItems } from './Action';
import { ItemState } from './State';

export const initialStateOfReactiveData: Array<any> = []
export const initialItemState: ItemState = { items: [], loading: false }
  ;
export const reactiveFromDataReducer = createReducer(
  initialStateOfReactiveData,
  on(AddReactiveFromDetail, (state, { StoreReactiveFormDetail }) => [...state, StoreReactiveFormDetail]),
  on(RemoveReactiveFromDetail, (state, { Index }) => state.filter((_, index) => index !== Index))
);

// NgRx Demo Reducer

export const itemReducer = createReducer(
  initialItemState,
  on(addItem, (state, { item }) => ({
    ...state,
    items: [...state.items, item], loading: item.id % 2 == 0 ? true : false
  })),
  on(removeItem, (state, { id }) => ({
    ...state,
    items: state.items.filter(item => item.id !== id)
  })),
  on(clearItems, (state) => ({
    ...state,
    items: []
  }))
);