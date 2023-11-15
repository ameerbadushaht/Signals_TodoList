import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TodoList';
  todos: any[] = [];
  lastInserted: any;
  
  handleAddTodoEvent(todo: any) {
    console.log("from create data: : : ", todo);
    console.log("before added to todos: : : ", this.todos);
    this.todos.push(todo); 
    console.log("after added to todos: : : ", this.todos);
    this.lastInserted = todo;
    console.log("lastInserted: : : ", this.lastInserted);
  }

  handleEditTodoEvent(todo: any) {
    console.log('from edit data:', todo);
    // Pass the 'todo' item to the 'create-work' component for editing
  }
}
