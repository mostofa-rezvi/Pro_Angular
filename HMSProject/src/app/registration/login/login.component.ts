import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrected from `styleUrl` to `styleUrls`
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['rezvi', [Validators.required, Validators.email]],  // Adjust validation as needed
      password: ['123', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Extract form values
      const { username, password } = this.loginForm.value;
      console.log('Username:', username);
      console.log('Password:', password);

      // Simulate authentication logic here
      // Replace this with a real authentication service call
      // For now, redirect to dashboard if form is valid
      this.router.navigate(['/login']);  // Adjust the route as needed
    } else {
      console.log('Form is invalid');
    }
  }
}
