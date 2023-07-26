import { Pipe, PipeTransform } from '@angular/core';
import { TodoModel } from './models/todo.model';

@Pipe({
  name: 'todoPipe'
})
export class TodoPipe implements PipeTransform {

  transform(value: TodoModel[], search: string, isCompletedSearch: boolean): TodoModel[] {
    if(search === "") return value;

    return value.filter(p=> p.work.toLowerCase().includes(search.toLowerCase()) && p.isCompleted === isCompletedSearch);
  }

}
