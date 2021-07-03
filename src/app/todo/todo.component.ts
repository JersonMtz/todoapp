import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { markTODO } from '../redux/todo/todo.actions';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  completed: boolean;

  constructor(private store: Store<AppState>) { }

  marckAll() {
    this.completed = !this.completed;
    this.store.dispatch(markTODO({ status: this.completed }));
  }

}
