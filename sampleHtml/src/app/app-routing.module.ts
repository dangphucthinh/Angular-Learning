import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InputComponent } from './Component/input/input.component';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { LandingpageComponent } from './Component/landingpage/landingpage.component';

export const routes: Routes = [

    {
        path: 'input', component: InputComponent,

    },
    {
        path: '', component: IndexComponent,
        children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        ]
    },
    {
        path: 'landing', component: LandingpageComponent,

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }