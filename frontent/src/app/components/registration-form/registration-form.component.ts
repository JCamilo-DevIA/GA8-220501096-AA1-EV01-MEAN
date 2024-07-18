import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  username: string = '';
  password: string = '';
  email: string = '';

  constructor(private userService: UserService) { }

  register() {
    const newUser = {
      username: this.username,
      password: this.password,
      email: this.email
    };
    this.userService.register(newUser).subscribe(
      response => {
        console.log('Registration successful', response);
        // Add any additional actions after successful registration
      },
      error => {
        console.error('Registration failed', error);
        // Handle registration error
      }
    );
  }
}
