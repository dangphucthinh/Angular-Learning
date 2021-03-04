import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html', //using template from test.component.html
  styleUrls: ['./test.component.css'],
  template: `
    <h2>
        hello {{name}}
    </h2>

    <h2> test = {{ 2 + 4}}</h2>
    <h2> {{"name = " + 2 + 4}}</h2>
    <h2> {{name.length + " " + name.toUpperCase()}} </h2>
    `
})
export class TestComponent implements OnInit {

  public name = "hihi"

  constructor() { }

  ngOnInit(): void {
  }

}
