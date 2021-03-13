import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './Component/login/login.component';

const routes: Routes = [
  {
    path: 'login' , component: LoginComponent
  },
  {
    path: '',component: IndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
