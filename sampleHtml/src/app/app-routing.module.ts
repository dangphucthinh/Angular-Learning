import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TestComponent } from './Component/test/test.component';
import { InputComponent } from './Component/input/input.component';

export const routes: Routes = [
    {
        path: 'test', component: TestComponent,       
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