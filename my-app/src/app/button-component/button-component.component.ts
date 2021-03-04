import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-component',
  templateUrl: './button-component.component.html',
  styleUrls: ['./button-component.component.css']
})
export class ButtonComponentComponent implements OnInit {

  constructor() { }

  public isClick = false

  hihi(): void{
    this.isClick = !this.isClick
    console.log(this.isClick)
    if(this.isClick) {
      console.log("hihi")
    }
    else{
      console.log("heheh")
    }
  }

  ngOnInit(): void {
  }

}
