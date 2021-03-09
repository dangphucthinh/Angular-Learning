import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../Shared/ValidationService';

@Component({
  selector: 'app-message-control',
  templateUrl: './message-control.component.html',
  styleUrls: ['./message-control.component.css']
})
export class MessageControlComponent{
  @Input() control: FormControl;
  constructor() { }

  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && !this.control.pristine) {
        return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }

    return null;
  }

}
