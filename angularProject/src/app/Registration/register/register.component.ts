import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      username: ['', Validators.required],
      emailaddress: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      mobileNumber: [''],
      terms: [false, Validators.requiredTrue]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      // Extract form values
      const formValues = this.registerForm.value;
      console.log('Registration Form Values:', formValues);

      // Simulate registration logic here
      // Replace with actual registration service call
      // Navigate to login page or another page after successful registration
      this.router.navigate(['/login']);
    }
  }
}
