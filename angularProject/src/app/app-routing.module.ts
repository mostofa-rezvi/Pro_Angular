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
import { DepartmenthomeComponent } from './HomePage/departmenthome/departmenthome.component';
import { DoctorshomeComponent } from './HomePage/DoctorsDepartment/doctorshome/doctorshome.component';
import { MyprofiledocComponent } from './DoctorDashBoard/DoctorProfile/myprofiledoc/myprofiledoc.component';
import { EditprofiledocComponent } from './DoctorDashBoard/DoctorProfile/editprofiledoc/editprofiledoc.component';
import { MyprofilenrsComponent } from './NurseDashBoard/NurseProfile/myprofilenrs/myprofilenrs.component';
import { EditprofilenrsComponent } from './NurseDashBoard/NurseProfile/editprofilenrs/editprofilenrs.component';
import { MyprofilepntComponent } from './PatientDashBoard/PatientProfile/myprofilepnt/myprofilepnt.component';
import { EditprofilepntComponent } from './PatientDashBoard/PatientProfile/editprofilepnt/editprofilepnt.component';
import { MyprofilerecepComponent } from './ReceptionistDashBoard/ReceptionistProfile/myprofilerecep/myprofilerecep.component';
import { EditprofilerecepComponent } from './ReceptionistDashBoard/ReceptionistProfile/editprofilerecep/editprofilerecep.component';
import { DoctorlistadminComponent } from './Doctors/doctorlistadmin/doctorlistadmin.component';
import { NurselistadminComponent } from './Nurse/nurselistadmin/nurselistadmin.component';
import { ReceptionistlistadminComponent } from './Admin/Receptionist/receptionistlistadmin/receptionistlistadmin.component';
import { AddappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/addappointment/addappointment.component';
import { UpdateappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/updateappointment/updateappointment.component';
import { ViewappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/viewappointment/viewappointment.component';
import { ListofappointmentComponent } from './ReceptionistDashBoard/ReceptionistAppointment/listofappointment/listofappointment.component';
import { CardiacdepartmentComponent } from './HomePage/DoctorsDepartment/cardiacdepartment/cardiacdepartment.component';
import { ChilddepartmentComponent } from './HomePage/DoctorsDepartment/childdepartment/childdepartment.component';
import { GeneraldepartmentComponent } from './HomePage/DoctorsDepartment/generaldepartment/generaldepartment.component';
import { NeurodepartmentComponent } from './HomePage/DoctorsDepartment/neurodepartment/neurodepartment.component';
import { OrthopedicsdepartmentComponent } from './HomePage/DoctorsDepartment/orthopedicsdepartment/orthopedicsdepartment.component';

const routes: Routes = [
  { path: 'activities', component: ActivitiesComponent },

  // Home or Landing Page
  { path: 'home', component: BodyhomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'appointment', component: AppointmenthomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgotpasswordComponent },
  { path: 'departmenthome', component: DepartmenthomeComponent },
  { path: 'doctorshome', component: DoctorshomeComponent },

  // Admin > Profile
  { path: 'adminprofile', component: MyprofileComponent },
  { path: 'admindashboard', component: AdmindashboardComponent },
  { path: 'adminprofileedit', component: EditprofileComponent },
  // Adim > Doctor Crud
  { path: 'adddoctor', component: AdddoctorComponent },
  { path: 'viewdoctor', component: ViewdoctorComponent },
  { path: 'updatedoctor/:id', component: UpdatedoctorComponent },
  { path: 'doctorlistadmin', component: DoctorlistadminComponent },
  // Admin > Nurse Crud
  { path: 'addnurse', component: AddnurseComponent },
  { path: 'viewnurse', component: ViewnurseComponent },
  { path: 'updatenurse/:id', component: UpdatenurseComponent },
  { path: 'nurselistadmin', component: NurselistadminComponent },
  // Admin > Receptionist Curd
  { path: 'viewrecep', component: ViewReceptionistComponent },
  { path: 'updaterecep/:id', component: UpdateReceptionistComponent },
  { path: 'addrecep', component: AddReceptionistComponent },
  { path: 'receplistadmin', component: ReceptionistlistadminComponent },
  // Admin > Department Crud
  { path: 'viewdepartment', component: ViewdepartmentComponent },
  { path: 'updatedepartment/:id', component: UpdatedepartmentComponent },
  { path: 'adddepartment', component: AdddepartmentComponent },
  // Admin > Other Component
  { path: 'adminsalary', component: SalarysettingsComponent },
  { path: 'adminleave', component: LeavetypeComponent },
  { path: 'adminpass', component: ChngpassComponent },
  { path: 'adminpayroll', component: AdminpayrollComponent },


  // Doctor > Profile
  { path: 'doctorprofile', component: MyprofiledocComponent },
  { path: 'doctorprofileedit', component: EditprofiledocComponent },
  // Nurse > Profile
  { path: 'nurseprofile', component: MyprofilenrsComponent },
  { path: 'nurseprofileedit', component: EditprofilenrsComponent },
  // Patient > Profile
  { path: 'patientprofile', component: MyprofilepntComponent },
  { path: 'patientprofileedit', component: EditprofilepntComponent },
  // Receptionist > Profile
  { path: 'receptionist-profile', component: MyprofilerecepComponent },
  { path: 'receptionist-profile-edit', component: EditprofilerecepComponent },

  // Receptionist > Appointment for all
  { path: 'addappointment', component: AddappointmentComponent },
  { path: 'updateappointment/:id', component: UpdateappointmentComponent },
  { path: 'viewappointment', component: ViewappointmentComponent },
  { path: 'listappointment', component: ListofappointmentComponent },

  // Department Home Routing
  { path: 'cardiac', component: CardiacdepartmentComponent },
  {path: 'childdepart', component: ChilddepartmentComponent},
  {path: 'generaldepart', component: GeneraldepartmentComponent},
  {path: 'neurodepart', component: NeurodepartmentComponent},
  {path: 'orthodepart', component: OrthopedicsdepartmentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
