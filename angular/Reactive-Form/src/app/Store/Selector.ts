import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState, ItemState } from './State';

export const selectReactiveFormData = (state: AppState) => state.reactiveFormData;

export const selectAllFormData = createSelector(
  selectReactiveFormData,
  (formData) => formData
);

// NgRx Demo Selectors
export const selectItemState = createFeatureSelector<ItemState>('ngrxDemo');

export const selectAllItems = createSelector(
  selectItemState,
  (state: ItemState) => state.items
);

export const selectItemsCount = createSelector(
  selectAllItems,
  (items) => items.length
);

export const selectLatestItem = createSelector(
  selectAllItems,
  (items) => items.length > 0 ? items[items.length - 1] : null
);

export const selectItemById = (id: number) => createSelector(
  selectAllItems,
  (items) => items.find(item => item.id === id)
);

export const selectIsLoading = createSelector(
  selectItemState,
  (state: ItemState) => state.loading
);