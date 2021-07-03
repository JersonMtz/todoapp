import { ActionReducerMap } from '@ngrx/store';

import TODO from '../models/todo.model';
import { FILTER } from './filter/filter.actions';

import { todoReducer } from './todo/todo.reducer';
import { filterReducer } from './filter/filter.reducer';

export interface AppState {
    todos: TODO[],
    filter: FILTER
}

export const appReducers:ActionReducerMap<AppState> = {
    todos: todoReducer,
    filter: filterReducer
}