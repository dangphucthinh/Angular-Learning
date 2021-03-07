import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  public textBoxValue =  ''
  public form: FormGroup
  public contactRegex = /^\d{8,12}$/
  public isClick = true
  public data: any = {
      fullName: '',
      phoneNumber: '',
      email: '', 
      gender : [
        'Male',
        'Female',
        'Others',
        'I do not wish to say'
      ]  
    };


  constructor() { 
    this.form = new FormGroup({
      fullName: new FormControl(this.data.fullName, [Validators.required]),
      phoneNumber : new FormControl(this.data.phoneNumber, [Validators.required]),
      email: new FormControl(this.data.email, [Validators.required, Validators.email]),
      gender : new FormControl(this.data.gender, Validators.required)
    })

  }

  ngOnInit(): void {
  }

  onClick(){
    this.isClick = !this.isClick
  }

}
