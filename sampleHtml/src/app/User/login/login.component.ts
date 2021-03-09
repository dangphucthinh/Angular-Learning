import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { UserLogin } from 'src/app/Component/Shared/user.login';
import { ValidationService } from 'src/app/Component/Shared/ValidationService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  @ViewChild('password') public textbox: TextBoxComponent;

    //set type of password is 'password'
    public ngAfterViewInit(): void {
        this.textbox.input.nativeElement.type = 'password';
    } 

    //can switch password between 'password' and 'text'
    public toggleVisibility(): void {
        const inputEl = this.textbox.input.nativeElement;
        inputEl.type = inputEl.type === 'password' ? 'text' : 'password';
    }
    public userModel : UserLogin = new UserLogin()
    

    public value = ''

    
    public form : any;
    public login(): void {
        this.form.markAllAsTouched();
        console.log(this.form.value);
    }

    constructor(){
        this.form = new FormGroup({
            username: new FormControl(this.userModel.username, ValidationService.requireValue),
            password: new FormControl(this.userModel.password,ValidationService.passwordValidator),
            loggedin: new FormControl()
        });
    }
    ngOnInit() :void  {
    }

    public clearForm(): void {
        this.form.reset();
    }
}
