import { createAction, props } from '@ngrx/store';

export const create = createAction(
    '[TODO] Create new TODO',
    props<{ description: string }>()
);

export const completed = createAction(
    '[TODO] Completed the TODO',
    props<{ id: number }>()
);

export const edit = createAction(
    '[TODO] Edit the TODO',
    props<{ id: number, description: string }>()
);

export const erase = createAction(
    '[TODO] Erase the TODO',
    props<{ id: number }>()
);

export const marckTODO = createAction(
    '[TODO] Marck all the TODOS',
    props<{ status: boolean }>()
);

export const clean = createAction(
    '[TODO] Clean TODO completed'
);
