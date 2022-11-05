import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { SignInModel } from '../models/signIn.model';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  clear(): void {
    localStorage.clear();
  }

  saveToken(token: string): void {
    localStorage.removeItem(environment.localStorage.tokenKey);
    localStorage.setItem(environment.localStorage.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(environment.localStorage.tokenKey);
  }

  saveUser(user: SignInModel): void {
    localStorage.removeItem(environment.localStorage.userKey);
    localStorage.setItem(
      environment.localStorage.userKey,
      JSON.stringify(user)
    );
  }

  getUser(): SignInModel | undefined {
    const user = localStorage.getItem(environment.localStorage.userKey);
    return user != null ? JSON.parse(user) : undefined;
  }
}
