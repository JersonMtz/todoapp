import { Pipe, PipeTransform } from '@angular/core';
import TODO from '../models/todo.model';
import { FILTER } from '../redux/filter/filter.actions';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {

  transform(array: TODO[], filter: FILTER): TODO[] {
    switch (filter) {
      case 'completed':
        return array.filter(todo => todo.Complete);
      case 'incompleted':
        return array.filter(todo => !todo.Complete);
      default:
        return array;
    }
  }

}
