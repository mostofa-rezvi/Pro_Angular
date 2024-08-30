import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginForm!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ){
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    });
  }

  onSubmit(): void{
    if(this.loginForm.valid){
      const credentials = this.loginForm.value;
      this.authService.login(credentials)
        .subscribe({
          next: res => {
            console.log('User Login Successfully.', res);
            this.authService.storeToken(res.token);
            const role = this.authService.getUserRole();
            this.router.navigate(['userprofile']);
          },
          error: error => {
            console.log('Error Login' + error);
          }
        });
    }
  }
}
