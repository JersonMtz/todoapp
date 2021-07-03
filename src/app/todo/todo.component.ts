import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../redux/app.state';
import { marckTODO } from '../redux/todo/todo.actions';

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
    this.store.dispatch(marckTODO({ status: this.completed }));
  }

}
