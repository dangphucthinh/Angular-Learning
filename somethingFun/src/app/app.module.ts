import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { IndexComponent } from './Component/index/index.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DropDownsModule,
    InputsModule,
    ProgressBarModule,
    DateInputsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
