import { Action, createReducer, on } from '@ngrx/store';
import { FILTER, setFilter } from './filter.actions';

export const initialState: FILTER = 'all';

const _filterReducer = createReducer<FILTER, Action>(
    initialState,
    on(setFilter, (state, { value }) => value)
);

export function filterReducer(state: any, action: Action) {
    return _filterReducer(state, action);
}