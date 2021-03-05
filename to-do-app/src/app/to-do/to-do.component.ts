import { animateChild, group, query, stagger, transition, trigger, useAnimation } from '@angular/animations';
import { Component } from '@angular/core';
import { fadeIn, fadeOut, moveDown, slideIn, slideOut } from '../animations';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeIn)
      ]),
      transition(':leave', [
        useAnimation(fadeOut)
      ])
    ]),
    
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
public thisDateTime = new Date(2019,3,10,2,30,0)
  todos = [
    {
      item: 'take dog to vet',
      due: new Date(2019,3,10,2,30,0)
    },
    {
      item: 'take cat to vet',
      due: new Date(2019,3,10,2,30,0)
    },
    {
      item: 'take sucvat to vet',
      due: new Date(2019,3,10,2,30,0)
    },
    {
      item: 'take conkec to vet',
      due: new Date(2019,3,10,2,30,0)
    }
  ];

  addTodo(input: HTMLInputElement){
    this.todos = [
      {
        item: input.value,
        due: this.thisDateTime
      },
      ...this.todos
    ];
    input.value = '';
  }

  removeTodos(i: any){
    this.todos.splice(i, 1)
  }
}
