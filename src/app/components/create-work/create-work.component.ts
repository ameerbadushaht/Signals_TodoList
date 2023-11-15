import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-create-work',
  templateUrl: './create-work.component.html',
  styleUrls: ['./create-work.component.css'],
})
export class CreateWorkComponent {
  @Output() addTodoEvent = new EventEmitter<any>();

  todos: any[] = [];
  date: string = '';
  name: string = '';
  status: string = '';

  constructor(private todoListService: TodoListService) {}

  onSubmit() {
    const todo = {
      date: this.date,
      name: this.name,
      status: this.status,
    };

    this.todoListService.addTodo(todo).subscribe(
      (response) => {
        this.todoListService.setTodo(response);

        console.log('Data added successfully', response);
        this.todos.push(response);
        this.addTodoEvent.emit(response);
        this.clearForm();
        // window.location.reload();
      },
      (error) => {
        console.error('Error adding data', error);
      }
    );
  }
  clearForm() {
    this.date = '';
    this.name = '';
    this.status = 'incomplete';
  }
}

export interface TodoList{
  date:string;
  name:string;
  status:string;
}
