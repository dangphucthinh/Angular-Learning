import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InputComponent } from './Component/input/input.component';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { LandingpageComponent } from './Component/landingpage/landingpage.component';
import { AuthGuardService } from './Services/guard.service';

export const routes: Routes = [

    {
        path: 'input', component: InputComponent,

    },
    {
        path: 'user', component: IndexComponent,
        children: [
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        ]
    },
    {
        path: '', component: LandingpageComponent, canActivate: [AuthGuardService],

    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }