// src/app/components/login/login.component.ts

import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) { }

  login() {
    const user = { username: this.username, password: this.password };
    this.userService.login(user).subscribe(
      response => {
        console.log('Login successful', response);
        this.router.navigate(['/']);
      },
      error => {
        console.error('Login failed', error);
      }
    );
  }
}
