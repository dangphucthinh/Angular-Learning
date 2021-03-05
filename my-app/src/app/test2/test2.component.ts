import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  // templateUrl: './test2.component.html',
  template:`
      <h2 class = "text-danger">
        hello {{"hihi"}}
    </h2>

    <button (click) = "onClick()">
      Click me
    </button>
    <button (click) = "onClick1($event)">
      Click me
    </button>
    {{greeting}}

  `,
  styleUrls: ['./test2.component.css']
}) 
export class Test2Component implements OnInit {

  constructor() { }
  public greeting = ""
  public isClick = false

  ngOnInit(): void {
  }

  onClick(){
    this.isClick = !this.isClick
    console.log(this.isClick)
    if(this.isClick) {
      console.log("hihi")
      this.greeting = "concac"
    }
    else{
      console.log("heheh")
      this.greeting = "c123"
    }
  }

  onClick1(event : any){
   console.log(event);
   this.greeting = event.type
  }

}
