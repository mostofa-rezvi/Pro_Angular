import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrl: './forgotpassword.component.css'
})
export class ForgotpasswordComponent {
  forgetPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.forgetPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.forgetPasswordForm.valid) {
      // Extract form values
      const { email } = this.forgetPasswordForm.value;
      console.log('Email for password reset:', email);

      // Simulate password reset logic here
      // You would normally call a service to handle password reset
      // this.authService.resetPassword(email).subscribe(
      //   () => this.router.navigate(['/login']),
      //   error => console.error('Error resetting password', error)
      // );

      // Navigate to login page or another page after successful reset
      this.router.navigate(['/login']);
    }
  }
}
