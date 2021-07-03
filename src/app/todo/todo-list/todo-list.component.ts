import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../redux/app.state';
import TODO from '../../models/todo.model';
import { FILTER } from '../../redux/filter/filter.actions';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  listTODO: TODO[] = [];
  filterNow: FILTER;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.subscribe(({ todos, filter }) => {
      this.listTODO = todos;
      this.filterNow = filter;
    });
  }

}
