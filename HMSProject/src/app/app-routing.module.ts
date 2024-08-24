import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './homepage/appointment/appointment.component';
import { BodypartComponent } from './homepage/bodypart/bodypart.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { ForgotpasswordComponent } from './registration/forgotpassword/forgotpassword.component';


const routes: Routes = [
  {path: 'home' , component: BodypartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'appointment', component: AppointmentComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgetpassword', component: ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
