import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Token } from "@angular/compiler/src/ml_parser/lexer";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable, Observer } from "rxjs";
import { map } from 'rxjs/operators';
import { UserSave } from "../Component/login/shared/user.model";
import { LoginResponse } from "../Component/login/shared/user.response";
import { ACCESS_TOKEN, CURRENT_USER } from "../Utils/Regex";

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    baseUrl = environment.apiUrl + 'Auth/';
    decodedToken!: Token;
    currentUser: UserSave | undefined;
    loginRedirectUrl: string | undefined;
    logoutRedirectUrl: string | undefined;

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
  
    }

    // register(model: any): Observable<any>{
    //   return this.http.post(this.baseUrl + 'register', model)
    //   .pipe(
    //     map((response: RegisterResponse) => {
    //         return this.progressRegisterResponse(response)
    //     })
    //   )
    // }
    
    login(model: any): Observable<any> {
      return this.http.post(this.baseUrl + 'login', model)
        .pipe(
          map((response: LoginResponse) => {
            return this.processLoginResponse(response);
          })
        );
    }

    // progressRegisterResponse(response: RegisterResponse){
    //   const message = response.message
    //   if(message === false){
    //     throw new Error("Register false")
    //   }
    //   this.message = message 

    // }

    processLoginResponse(response: LoginResponse){
        const token = response.access_token
        const userResponse = response.user

        if(token === null){
          throw new Error("Token is empty")
        }

        this.decodedToken = this.jwtHelper.decodeToken(token) as Token
        this.currentUser = new UserSave(
          userResponse.id,
          userResponse.username,
          userResponse.email,
          userResponse.groupRole,
          userResponse.roles
        )


        localStorage.setItem(ACCESS_TOKEN, token)
        localStorage.setItem(CURRENT_USER, JSON.stringify(this.currentUser))
    }

    logout(){
      localStorage.removeItem(ACCESS_TOKEN)
      localStorage.removeItem(CURRENT_USER)
    }

    loggedIn(){
      const token = localStorage.getItem(ACCESS_TOKEN)
      return !this.jwtHelper.isTokenExpired(token as string)
    }
}