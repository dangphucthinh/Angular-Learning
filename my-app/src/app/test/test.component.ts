import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html', //using template from test.component.html
  template: `
    <h2 class = "text-danger">
        hello {{name}}
    </h2>

    <h2 class = "text-success"> test = {{ 2 + 4}}</h2>
    <h2 [class.text-danger] = "hasError"> {{"name = " + 2 + 4}}</h2>
    <h2 class = "text-special" [class]="successClass"> {{name.length + " " + name.toUpperCase()}} </h2>
    <input [id] = "myId" type = text value = "cacacacac">
    <input id = {{myId}} type = text value = "123123123">
    <input disabled = {{false}} id = {{myId}} type = text value = "123123123">
    <input disabled = "idDisabled" id = {{myId}} type = text value = "123123123">,

    <h2 [ngClass] = messageClasses>12321312321321</h2>
    `,
    styles: [`
      .text-danger {
        color: red
      }
      .text-success {
        color: green
      }
      .text-special {
        font-special : italic
      }
    `],

})
export class TestComponent implements OnInit {

  public name = "hihi"
  
  public myId = "testId"

  public isDisabled = "true"

  public isSpecial = true;

  public hasError = true;

  public successClass = "text-success"
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
