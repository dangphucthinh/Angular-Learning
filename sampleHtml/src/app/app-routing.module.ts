import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { InputComponent } from './Component/input/input.component';
import { ButtonComponent } from './Component/button/button.component';

export const routes: Routes = [
    {
        path: '', component: ButtonComponent,       
    },
    {
        path: 'input', component: InputComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  
  export class AppRoutingModule { }