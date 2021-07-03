import { Action, createReducer, on } from '@ngrx/store';
import { create, completed, edit, erase, markTODO, clean } from './todo.actions';
import TODO from '../../models/todo.model';

export const initialState: TODO[] = [];

const _todoReducer = createReducer(
    initialState,
    on(create, (state, { description }) => [...state, new TODO(description)]),
    on(erase, (state, { id }) => state.filter(todo => todo.Id !== id)),
    on(clean, state => state.filter(todo => !todo.Complete)),

    on(completed, (state, { id }) => {
        return state.map(todo => {
            if (todo.Id == id) {
                return {
                    ...todo,
                    Complete: !todo.Complete
                }
            } else {
                return todo;
            }
        });
    }),

    on(markTODO, (state, { status }) => {
        return state.map(todo => {
            return {
                ...todo,
                Complete: status
            }
        });
    }),

    on(edit, (state, { id, description }) => {
        return state.map(todo => {
            if (todo.Id == id) {
                return {
                    ...todo,
                    Description: description
                }
            } else {
                return todo;
            }
        });
    })

);

export function todoReducer(state: any, action: Action) {
    return _todoReducer(state, action);
}

