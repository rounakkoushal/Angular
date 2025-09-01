import { createFeatureSelector } from '@ngrx/store';
// import { AppState } from './State';

// export const selectReactiveFormData = (state: AppState) => state.reactiveFormData;

export const selectAllReactiveFormData = createFeatureSelector<Array<any>>('reactiveFormData')