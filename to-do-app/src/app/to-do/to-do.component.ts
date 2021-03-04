import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent  {

  todos = [
    {
      item: 'take dog to vet'
    },
    {
      item: 'take cat to vet'
    },
    {
      item: 'take sucvat to vet'
    },
    {
      item: 'take conkec to vet'
    }
  ];

  addTodo(input: HTMLInputElement){
    this.todos = [
      {
        item: input.value
      },
      ...this.todos
    ];
    input.value = '';
  }

  removeTodos(todo: any, i: any){
    this.todos.splice(i, 1)
  }
}
