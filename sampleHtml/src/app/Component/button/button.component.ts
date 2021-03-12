import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  public firstName: string;
  public lastName: string;
  public email: string;
  public isClick : false
  constructor() { }
  private router: Router
  ngOnInit(): void {
  }

  onClick(){
    console.log("12213123123")
    alert("Hello! I am an alert box!");
  }
}
