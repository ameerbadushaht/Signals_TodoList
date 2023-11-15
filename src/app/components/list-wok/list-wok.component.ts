import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoListService } from 'src/app/services/todo-list.service';

@Component({
  selector: 'app-list-wok',
  templateUrl: './list-wok.component.html',
  styleUrls: ['./list-wok.component.css'],
})
export class ListWokComponent implements OnInit {
  @Output() editTodoEvent = new EventEmitter<any>();
  @Input() lastData: any;
  @Input() todos: any;

  testVar: any;

  constructor(public todoListService: TodoListService) {}
  ngOnInit() {
    this.testVar = this.todos;
    console.log('TEST: : : : ', this.testVar);
    this.todoListService.getTodos().subscribe((data) => {
      this.todos = data;
      console.log('data in list ::', this.todos);
    });
  }

  editTodo(todo: any) {
    this.editTodoEvent.emit(todo);
    // console.log('Edit', todo);
  }

  deleteTodo(todo: any) {
    this.todoListService.deleteTodo(todo.id).subscribe(
      () => {
        this.todos = this.todos.filter((t) => t !== todo);
        console.log('Delete', todo);
      },
      (error) => {
        console.error('Error deleting data', error);
      }
    );
  }
}
