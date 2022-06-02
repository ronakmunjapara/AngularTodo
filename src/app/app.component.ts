import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheToDOs';


  // State
  todos: String[] = [];
  todoText= '';

  // life cycle
  ngOnInit(){
    const exsistingTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(exsistingTodos as string)|| [];
  }


  // event
  addTodo(){
    this.todos.push(this.todoText);
    localStorage.setItem('todos',JSON.stringify(this.todos));
  }
}
