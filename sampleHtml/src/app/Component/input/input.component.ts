import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Cards } from 'src/app/interfaces/card';
import { isCheckEmail } from 'src/app/Utilities/UtilsRegex';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  // styleUrls: ['./input.component.css']
})
export class InputComponent{
  cards = Cards;
  public textBoxValue =  ''
  public form: FormGroup
  public contactRegex = /^\d{8,12}$/
  public isClick = true
  public data: any = {
      fullName: 'Oscar',
      phoneNumber: '0123456789',
      email: 'oscar@enclave.vn', 
      gender : [
        'Male',
        'Female',
        'Others',
        'I do not wish to say'
      ]  
    };

  public listItems: Array<string> = ['Small', 'Medium', 'Large'];
  public selectedValue = 'Male';

  constructor() { 
    const contactRegex = /^\d{8,12}$/
      this.form = new FormGroup({
      fullName: new FormControl(this.data.fullName, [Validators.required]),
      phoneNumber : new FormControl(this.data.phoneNumber, [Validators.required, Validators.pattern(contactRegex)]),
      email: new FormControl(this.data.email, [Validators.required, Validators.email, Validators.pattern(isCheckEmail)]),
      gender : new FormControl(this.data.gender, Validators.required)
    })
  }



  onClick(){
    this.isClick = !this.isClick
  }
}
