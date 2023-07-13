import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-crud',
  templateUrl: './todo-crud.component.html',
  styleUrls: ['./todo-crud.component.css']
})
export class TodoCrudComponent implements OnInit {
  todos: any[] = [];
  todoText: string = '';

  ngOnInit() {
    this.retrieveTodos();
  }

  addTodo() {
    if (this.todoText.trim() !== '') {
      const newTodo = {
        id: this.todos.length + 1,
        text: this.todoText,
        completed: false
      };
      this.todos.push(newTodo);
      this.todoText = '';
      this.saveTodos();
    }
  }

  updateTodoStatus(todo: any) {
    this.saveTodos();
  }

  deleteTodoById(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.saveTodos();
  }

  changeStatus(todo: any) {
    todo.completed = !todo.completed;
    this.saveTodos();
  }

  saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  retrieveTodos() {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      this.todos = JSON.parse(savedTodos);
    }
  }
}
