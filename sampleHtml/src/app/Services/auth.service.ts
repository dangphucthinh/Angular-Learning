import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Token } from "@angular/compiler/src/ml_parser/lexer";
import { UserSave } from "../Component/Shared/user.model";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { LoginResponse } from "../Component/Shared/user.response";
import { map } from 'rxjs/operators';
import { ACCESS_TOKEN, CURRENT_USER } from "../Utilities/UtilsRegex";

@Injectable({
    providedIn: 'root'
  })

export class UserService{
    baseUrl = environment.apiUrl + 'Auth/';
    decodedToken: Token;
    currentUser: UserSave;
    loginRedirectUrl: string;
    logoutRedirectUrl: string;
    private roles: string[];

    constructor(private http: HttpClient, public jwtHelper: JwtHelperService) {
  
    }
    
    login(model: any): Observable<any> {
      return this.http.post(this.baseUrl + 'login', model)
        .pipe(
          map((response: LoginResponse) => {
            return this.processLoginResponse(response);
          })
        );
    }

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
      return !this.jwtHelper.isTokenExpired(token)
    }
}