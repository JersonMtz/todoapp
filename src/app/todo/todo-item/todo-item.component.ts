import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';
import TODO from '../../models/todo.model';
import { completed, edit, erase } from '../../redux/todo/todo.actions';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @ViewChild('inputEdit', { static: true }) htmlInput: ElementRef;
  @Input() todo: TODO = new TODO('');
  txtDescription: FormControl = new FormControl();
  chxCompleted: FormControl = new FormControl();
  edit: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.txtDescription.setValue(this.todo.Description);
    this.txtDescription.setValidators(Validators.required);
    this.chxCompleted.setValue(this.todo.Complete);

    this.chxCompleted.valueChanges
    .subscribe(() => this.store.dispatch(completed({ id: this.todo.Id })));
  }

  editing() {
    this.edit = true;
    this.txtDescription.setValue(this.todo.Description);
    // setTimeout(() => this.htmlInput.nativeElement.focus(), 1);
    setTimeout(() => this.htmlInput.nativeElement.select(), 1);
  }

  finishEdit() {
    this.edit = false;
    if (this.txtDescription.invalid || (this.txtDescription.value === this.todo.Description)) { return }

    this.store.dispatch(edit({id: this.todo.Id, description: this.txtDescription.value }))
  }

  erase() {
    this.store.dispatch(erase({ id: this.todo.Id }));
  }

}
