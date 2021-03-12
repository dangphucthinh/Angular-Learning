import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from 'src/app/Component/Shared/ValidationService';
import { UserService } from 'src/app/Services/auth.service';
import { UserRegiter } from './shared/user.register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
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
  form : FormGroup
  public userModel : UserRegiter = new UserRegiter()

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private router :Router
  ) {
    this.form = new FormGroup({
      username: new FormControl(this.userModel.username, ValidationService.requireValue),
      password: new FormControl(this.userModel.password,ValidationService.passwordValidator),
  });
   }

  ngOnInit(): void {
  }

  onRegister(): void{
    console.log(this.form.value);
    
      this.userService.register(this.form.value).subscribe(
        response =>{
          this.router.navigate(['/input']).then(()=>{
            this.toastr.success('Hello world!', 'Toastr fun!')
          })
        },
        error => {
          this.toastr.error('concac');
        }
      )
  }

  onClear(): void{
    this.form.reset()
  }

}
