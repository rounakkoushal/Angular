import { createAction, props } from '@ngrx/store';

export const AddReactiveFromDetail = createAction('[ReactiveForm Component] AddFormDetail', props<{StoreReactiveFormDetail: Array<any>}>());
export const RemoveReactiveFromDetail = createAction('[ReactiveForm Component] RemoveFormDetail', props<{Index: number}>());