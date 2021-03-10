import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { UserLogin } from 'src/app/Component/Shared/user.login';
import { ValidationService } from 'src/app/Component/Shared/ValidationService';
import { UserService } from 'src/app/Services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
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
    constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router :Router
    ){
        this.form = new FormGroup({
            username: new FormControl(this.userModel.username, ValidationService.requireValue),
            password: new FormControl(this.userModel.password,ValidationService.passwordValidator),
            loggedin: new FormControl()
        });
    }

    showSuccess() {
        this.toastr.success('Hello world!', 'Toastr fun!');
      }

    public form : any;
    public login(): void {
        // this.form.markAllAsTouched();
        console.log(this.userModel)
        console.log(this.form.value);
        this.userService.login(this.form.value).subscribe(
            response => {
                this.router.navigate(['/input']).then(() =>{
                    this.toastr.success('Hello world!', 'Toastr fun!')
                })
            },
            error => {
                this.toastr.error('Tên đăng nhập hoặc mật khẩu không đúng!');
            }

        )

    }

      public clearForm(): void {
        this.form.reset();
    }
}
