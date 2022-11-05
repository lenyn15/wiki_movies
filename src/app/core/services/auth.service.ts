import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/signIn.model';
import { SignUpModel } from '../models/signUp.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}
  signIn(userToLogin: UserModel): Observable<SignInModel> {
    return this.httpClient.post<SignInModel>(
      `${environment.identityApi.baseUrl}${environment.identityApi.signInUrl}${environment.identityApi.apiKey}`,
      { ...userToLogin, returnSecurityToken: true }
    );
  }

  signUp(userToRegister: UserModel): Observable<SignUpModel> {
    return this.httpClient.post<SignUpModel>(
      `${environment.identityApi.baseUrl}${environment.identityApi.signUpUrl}${environment.identityApi.apiKey}`,
      { ...userToRegister, returnSecurityToken: true }
    );
  }
}
