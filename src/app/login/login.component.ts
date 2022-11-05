import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserModel } from '../core/models/user.model';
import { AuthService } from '../core/services/auth.service';
import { TokenService } from '../core/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formSignIn: UserModel = {
    email: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar,
    private tokenService: TokenService
  ) {}
  handleSignIn() {
    const userToLogin = this.formSignIn;
    this.authService.signIn(userToLogin).subscribe({
      next: (response) => {
        if (!response.error) {
          this.tokenService.saveToken(response.idToken);
          this.tokenService.saveUser(response);
          this.router.navigateByUrl('/');
        }
      },
      error: (error) => {
        if (error.status === 400)
          this.snackBar.open('Usuario y/o contraseña incorrecto.', 'OK');
      },
    });
  }

  redirectToRegister() {
    this.router.navigateByUrl('/register');
  }
  ngOnInit(): void {}
}
