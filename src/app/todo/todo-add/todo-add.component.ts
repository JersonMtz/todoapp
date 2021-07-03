import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import { create } from '../../redux/todo/todo.actions';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {

  txtInput: FormControl = new FormControl('', Validators.required);

  constructor(private store: Store<AppState>) { }

  addTODO() { 
    if (this.txtInput.invalid) { return }
    this.store.dispatch(create({ description: this.txtInput.value }));
    this.txtInput.reset();
  }

}
