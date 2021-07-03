import { createAction, props } from '@ngrx/store';

export type FILTER = 'all' | 'incompleted' | 'completed';

export const setFilter = createAction(
    '[Filter] Apply filter',
    props<{ value: FILTER }>()
);
