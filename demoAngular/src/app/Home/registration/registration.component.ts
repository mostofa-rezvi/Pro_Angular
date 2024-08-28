import { Component } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../Model/user.model';
import { error } from 'console';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  regForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ){
    this.regForm = formBuilder.group({
      // name: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // password: ['', [Validators.required, Validators.min(3), Validators.max(12)]]

      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit(): void{
    if(this.regForm.valid){
      const user: UserModel = this.regForm.value;
      this.authService.registration(user)
        .subscribe({
          next: res => {
            console.log('User Registration Successfully Done.', res);
            this.authService.storeToken(res.token);
            this.router.navigate(['/']);
          },
          error: error => {
            console.log('Error Registration User' + error);
          }
        });
    }
    else{
      alert("Complete Mandatory Field")
    }
  }
}
