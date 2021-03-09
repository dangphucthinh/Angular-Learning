import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InputComponent } from './Component/input/input.component';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ButtonComponent } from './Component/button/button.component';

export const routes: Routes = [
    {
        path: '', component: ButtonComponent,

    },
    {
        path: 'input', component: InputComponent,

    },
    {
        path: 'user', component: IndexComponent,
        children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }