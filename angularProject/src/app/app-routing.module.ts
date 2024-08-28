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
import { SalarysettingsComponent } from './Admin/Settings/salarysettings/salarysettings.component';
import { LeavetypeComponent } from './Admin/Settings/leavetype/leavetype.component';
import { ChngpassComponent } from './Admin/Settings/chngpass/chngpass.component';
import { AdminpayrollComponent } from './Admin/adminpayroll/adminpayroll.component';
import { ViewdepartmentComponent } from './Admin/Department/viewdepartment/viewdepartment.component';
import { AdddepartmentComponent } from './Admin/Department/adddepartment/adddepartment.component';
import { UpdatedepartmentComponent } from './Admin/Department/updatedepartment/updatedepartment.component';
import { ViewReceptionistComponent } from './Admin/Receptionist/viewreceptionist/viewreceptionist.component';
import { UpdateReceptionistComponent } from './Admin/Receptionist/updatereceptionist/updatereceptionist.component';
import { AddReceptionistComponent } from './Admin/Receptionist/addreceptionist/addreceptionist.component';
import { MyprofileComponent } from './Admin/Profile/myprofile/myprofile.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { EditprofileComponent } from './Admin/Profile/editprofile/editprofile.component';
// import { flush } from '@angular/core/testing';

const routes: Routes = [
  {path: 'activities', component: ActivitiesComponent},

  // Home or Landing Page
  {path: 'home', component: BodyhomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'appointment', component: AppointmenthomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'forgetpassword', component: ForgotpasswordComponent},

  // Admin > Nurse Crud
  {path: 'addnurse', component: AddnurseComponent},
  {path: 'viewnurse', component: ViewnurseComponent},
  {path: 'updatenurse/:id', component: UpdatenurseComponent},
  // {path: '', redirectTo: '/viewnurse', pathMatch: 'full'},

  // Adim > Doctor Crud
  {path: 'adddoctor', component: AdddoctorComponent},
  {path: 'viewdoctor', component: ViewdoctorComponent},
  {path: 'updatedoctor/:id', component: UpdatedoctorComponent},
  // { path: '', redirectTo: '/viewdoctor', pathMatch: 'full' },
  // { path: '**', redirectTo: '/viewdoctor' },

  // Admin > Other Component
  {path: 'adminsalary', component: SalarysettingsComponent},
  {path: 'adminleave', component: LeavetypeComponent},
  {path: 'adminpass', component: ChngpassComponent},
  {path: 'adminpayroll', component: AdminpayrollComponent},

  // Admin > Department Crud
  {path: 'viewdepartment', component: ViewdepartmentComponent},
  {path: 'updatedepartment/:id', component: UpdatedepartmentComponent},
  {path: 'adddepartment', component: AdddepartmentComponent},

  // Admin > Receptionist Curd
  {path: 'viewrecep', component: ViewReceptionistComponent},
  {path: 'updaterecep/:id', component: UpdateReceptionistComponent},
  {path: 'addrecep', component: AddReceptionistComponent},

  {path: 'adminprofile', component: MyprofileComponent},
  {path: 'admindashboard', component: AdmindashboardComponent},
  {path: 'adminprofileedit', component: EditprofileComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
