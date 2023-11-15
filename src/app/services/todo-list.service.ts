import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoList } from '../components/create-work/create-work.component';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {



  private apiUrl = 'http://localhost:3000/todo';

  public todoData = signal<TodoList[]>([])

  constructor(private http: HttpClient) { }

  addTodo(todo: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, todo);
  }

  setTodo(response: any) {
    this.todoData.mutate((val) => {
      val.push(response);
    });
  }

  getTodos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  deleteTodo(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
