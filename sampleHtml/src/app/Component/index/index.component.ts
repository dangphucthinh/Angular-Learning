import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick():void{
    window.open("https://stackoverflow.com/questions/43006550/how-to-use-ngif-else")
  }
}
