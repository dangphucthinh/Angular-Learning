import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-button',
  // styles : ["src/styles.css"],
  templateUrl: './button.component.html',
<<<<<<< HEAD
  // styleUrls: ['./button.component.css']
=======
>>>>>>> 30be659e8ccaa5202c38aa7c84b5752804301669
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
