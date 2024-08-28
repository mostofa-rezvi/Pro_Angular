import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { AddnurseComponent } from './Nurse/addnurse/addnurse.component';
import { ViewnurseComponent } from './Nurse/viewnurse/viewnurse.component';
import { UpdatenurseComponent } from './Nurse/updatenurse/updatenurse.component';
import { AdddoctorComponent } from './Doctors/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './Doctors/viewdoctor/viewdoctor.component';
import { UpdatedoctorComponent } from './Doctors/updatedoctor/updatedoctor.component';
import { BodyhomeComponent } from './HomePage/bodyhome/bodyhome.component';
import { AppointmenthomeComponent } from './HomePage/appointmenthome/appointmenthome.component';
import { LoginComponent } from './Registration/login/login.component';
import { RegisterComponent } from './Registration/register/register.component';
import { ForgotpasswordComponent } from './Registration/forgotpassword/forgotpassword.component';
// import { flush } from '@angular/core/testing';

const routes: Routes = [
  {path: 'activities', component: ActivitiesComponent},

  {path: 'addnurse', component: AddnurseComponent},
  {path: 'viewnurse', component: ViewnurseComponent},
  {path: 'updatenurse/:id', component: UpdatenurseComponent},

  {path: 'adddoctor', component: AdddoctorComponent},
  {path: 'viewdoctor', component: ViewdoctorComponent},
  {path: 'updatedoctor/:id', component: UpdatedoctorComponent},

  {path: 'home', component: BodyhomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  {path: 'appointment', component: AppointmenthomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgetpassword', component: ForgotpasswordComponent}

  
  // {path: '', redirectTo: '/viewnurse', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
