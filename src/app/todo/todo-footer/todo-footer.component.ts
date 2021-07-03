import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/redux/app.state';
import { FILTER, setFilter } from 'src/app/redux/filter/filter.actions';
import { clean } from 'src/app/redux/todo/todo.actions';

@Component({
  selector: 'todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  filterNow: FILTER;
  arrayFilter: string[] = ['Todos','Completados', 'Incompletos'];
  count: number = 0;

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.filterNow = state.filter;
      this.count = state.todos.filter(todo => !todo.Complete).length;
    });
  }

  private change(value: string): FILTER {
    switch (value) {
      case 'Completados':
        return 'completed';
      case 'Incompletos':
        return 'incompleted';
      default: 
        return 'all';
    }
  }

  applyFilter(value: string) {
    const state = this.change(value);
    this.store.dispatch(setFilter({ value: state }));
  }

  cleanTODOS() {
    this.store.dispatch(clean());
  }

}
