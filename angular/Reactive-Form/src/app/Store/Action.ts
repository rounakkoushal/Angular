import { createAction, props } from '@ngrx/store';
import { Item } from './State';

export const AddReactiveFromDetail = createAction('[ReactiveForm Component] AddFormDetail', props<{StoreReactiveFormDetail: Array<any>}>());
export const RemoveReactiveFromDetail = createAction('[ReactiveForm Component] RemoveFormDetail', props<{Index: number}>());

// NgRx Demo Actions


export const addItem = createAction(
  '[NgRx Demo] Add Item',
  props<{ item: Item }>()
);

export const removeItem = createAction(
  '[NgRx Demo] Remove Item',
  props<{ id: number }>()
);

export const clearItems = createAction(
  '[NgRx Demo] Clear All Items'
);