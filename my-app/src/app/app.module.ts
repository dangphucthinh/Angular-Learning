import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonComponentComponent } from './button-component/button-component.component';
import { InputsModule,TextBoxModule  } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';





@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    Test2Component,
    ButtonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    TextBoxModule,
    LabelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
