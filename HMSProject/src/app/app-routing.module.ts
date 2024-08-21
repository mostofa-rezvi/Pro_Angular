import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './homepage/appointment/appointment.component';
import { BodypartComponent } from './homepage/bodypart/bodypart.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';

const routes: Routes = [
  {path: '' , component: BodypartComponent},
  {path: 'appointment', component: AppointmentComponent},
  {path: '', redirectTo: '/appointment', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: '/login'},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
