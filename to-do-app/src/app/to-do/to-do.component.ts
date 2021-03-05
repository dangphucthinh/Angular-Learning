import { animateChild, group, query, stagger, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { moveDown, slideIn, slideOut } from '../animations';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  animations: [
    trigger('todoAnimations', [
      transition(':enter', [
        group([
          query('h1', [
            useAnimation(moveDown)
          ]),
          query('input', [
            useAnimation(moveDown)
          ]),
          query('@todoItem',
            stagger(100, animateChild()))
        ])
      ])
    ]),

    trigger('todoItem', [
      transition(':enter', [
        useAnimation(slideIn),
      ]),
      transition(':leave', [
        useAnimation(slideOut)
      ]),
    ])
  ]
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

  removeTodos(i: any){
    this.todos.splice(i, 1)
  }
}
