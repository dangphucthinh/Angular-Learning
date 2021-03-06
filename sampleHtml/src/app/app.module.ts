import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ProgressBarModule } from '@progress/kendo-angular-progressbar';
import { InputComponent } from './Component/input/input.component';
import { AppRoutingModule } from './app-routing.module';
import { LabelModule } from '@progress/kendo-angular-label';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './Component/index/index.component';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { MessageControlComponent } from './Component/message-control/message-control.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { ACCESS_TOKEN } from './Utilities/UtilsRegex';
import { LandingpageComponent } from './Component/landingpage/landingpage.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthGuardService } from './Services/guard.service';
import { ModalComponent } from './Component/modal/modal.component';
import { CardComponent } from './Component/card/card.component';

export function tokenGetter() {
  return localStorage.getItem(ACCESS_TOKEN);
}


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    IndexComponent,
    LoginComponent,
    LoginComponent,
    RegisterComponent,
    MessageControlComponent,
    LandingpageComponent,
    ModalComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ButtonsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    DropDownsModule,
    InputsModule,
    ProgressBarModule,
    LabelModule,
    DateInputsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
          whitelistedDomains: [
              'localhost:55992',
              'localhost:55992',
              '52.77.233.77:55992'
          ],
          blacklistedRoutes: [
              'localhost:55992/api/auth/login',
              'localhost:55992/api/auth/login'
          ]
      }
  })
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
