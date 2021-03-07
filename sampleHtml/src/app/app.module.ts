import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { ButtonComponent } from './Component/button/button.component';
import { InputComponent } from './Component/input/input.component';
import { TestComponent } from './Component/test/test.component';
import { AppRoutingModule } from './app-routing.module';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    InputComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DropDownsModule,
    InputsModule,
    ProgressBarModule,
    LabelModule,
    DateInputsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
