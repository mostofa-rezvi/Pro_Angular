import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { AddnurseComponent } from './Nurse/addnurse/addnurse.component';
import { ViewnurseComponent } from './Nurse/viewnurse/viewnurse.component';
import { UpdatenurseComponent } from './Nurse/updatenurse/updatenurse.component';
import { DeletenurseComponent } from './Nurse/deletenurse/deletenurse.component';
import { AdddoctorComponent } from './Doctors/adddoctor/adddoctor.component';
import { ViewdoctorComponent } from './Doctors/viewdoctor/viewdoctor.component';
import { UpdatedoctorComponent } from './Doctors/updatedoctor/updatedoctor.component';
import { ForgotpasswordComponent } from './Registration/forgotpassword/forgotpassword.component';
import { LoginComponent } from './Registration/login/login.component';
import { RegisterComponent } from './Registration/register/register.component';
import { AppointmenthomeComponent } from './HomePage/appointmenthome/appointmenthome.component';
import { BodyhomeComponent } from './HomePage/bodyhome/bodyhome.component';
import { FooterhomeComponent } from './HomePage/footerhome/footerhome.component';
import { NavbarhomeComponent } from './HomePage/navbarhome/navbarhome.component';
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
import { EditprofileComponent } from './Admin/Profile/editprofile/editprofile.component';
import { AdmindashboardComponent } from './dashboard/admindashboard/admindashboard.component';
import { DepartmenthomeComponent } from './HomePage/departmenthome/departmenthome.component';
import { DoctorshomeComponent } from './HomePage/DoctorsDepartment/doctorshome/doctorshome.component';
import { DoctorpntComponent } from './PatientDashBoard/doctorpnt/doctorpnt.component';
import { AppointmentpntComponent } from './PatientDashBoard/appointmentpnt/appointmentpnt.component';
import { PaymentpntComponent } from './PatientDashBoard/paymentpnt/paymentpnt.component';
import { SettingspntComponent } from './PatientDashBoard/settingspnt/settingspnt.component';
import { ReportpntComponent } from './PatientDashBoard/reportpnt/reportpnt.component';
import { AddactivitiesComponent } from './DoctorDashBoard/Activities Doc/addactivities/addactivities.component';
import { UpdateactivitiesComponent } from './DoctorDashBoard/Activities Doc/updateactivities/updateactivities.component';
import { ViewactivitiesComponent } from './DoctorDashBoard/Activities Doc/viewactivities/viewactivities.component';
import { AddappointmentdocComponent } from './DoctorDashBoard/Appointment Doc/addappointmentdoc/addappointmentdoc.component';
import { UpdateappointmentdocComponent } from './DoctorDashBoard/Appointment Doc/updateappointmentdoc/updateappointmentdoc.component';
import { ViewappointmentdocComponent } from './DoctorDashBoard/Appointment Doc/viewappointmentdoc/viewappointmentdoc.component';
import { AddpatientdocComponent } from './DoctorDashBoard/Patient Doc/addpatientdoc/addpatientdoc.component';
import { UpdatepatientdocComponent } from './DoctorDashBoard/Patient Doc/updatepatientdoc/updatepatientdoc.component';
import { ViewpatientdocComponent } from './DoctorDashBoard/Patient Doc/viewpatientdoc/viewpatientdoc.component';
import { AddpayrolldocComponent } from './DoctorDashBoard/Payroll Doc/addpayrolldoc/addpayrolldoc.component';
import { ViewpayrolldocComponent } from './DoctorDashBoard/Payroll Doc/viewpayrolldoc/viewpayrolldoc.component';
import { UpdatepayrolldocComponent } from './DoctorDashBoard/Payroll Doc/updatepayrolldoc/updatepayrolldoc.component';
import { AddreportdocComponent } from './DoctorDashBoard/Report Doc/addreportdoc/addreportdoc.component';
import { UpdatereportdocComponent } from './DoctorDashBoard/Report Doc/updatereportdoc/updatereportdoc.component';
import { ViewreportdocComponent } from './DoctorDashBoard/Report Doc/viewreportdoc/viewreportdoc.component';
import { AddsettingsdocComponent } from './DoctorDashBoard/Settings Doc/addsettingsdoc/addsettingsdoc.component';
import { UpdatesettingsdocComponent } from './DoctorDashBoard/Settings Doc/updatesettingsdoc/updatesettingsdoc.component';
import { ViewsettingsdocComponent } from './DoctorDashBoard/Settings Doc/viewsettingsdoc/viewsettingsdoc.component';
import { MyprofiledocComponent } from './DoctorDashBoard/DoctorProfile/myprofiledoc/myprofiledoc.component';
import { EditprofiledocComponent } from './DoctorDashBoard/DoctorProfile/editprofiledoc/editprofiledoc.component';
import { MyprofilenrsComponent } from './NurseDashBoard/NurseProfile/myprofilenrs/myprofilenrs.component';
import { EditprofilenrsComponent } from './NurseDashBoard/NurseProfile/editprofilenrs/editprofilenrs.component';
import { MyprofilepntComponent } from './PatientDashBoard/PatientProfile/myprofilepnt/myprofilepnt.component';
import { EditprofilepntComponent } from './PatientDashBoard/PatientProfile/editprofilepnt/editprofilepnt.component';
import { MyprofilerecepComponent } from './ReceptionistDashBoard/ReceptionistProfile/myprofilerecep/myprofilerecep.component';
import { EditprofilerecepComponent } from './ReceptionistDashBoard/ReceptionistProfile/editprofilerecep/editprofilerecep.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ActivitiesComponent,
    AddnurseComponent,
    ViewnurseComponent,
    UpdatenurseComponent,
    DeletenurseComponent,
    AdddoctorComponent,
    ViewdoctorComponent,
    UpdatedoctorComponent,
    ForgotpasswordComponent,
    LoginComponent,
    RegisterComponent,
    AppointmenthomeComponent,
    BodyhomeComponent,
    FooterhomeComponent,
    NavbarhomeComponent,
    SalarysettingsComponent,
    LeavetypeComponent,
    ChngpassComponent,
    AdminpayrollComponent,
    ViewdepartmentComponent,
    AdddepartmentComponent,
    UpdatedepartmentComponent,
    ViewReceptionistComponent,
    UpdateReceptionistComponent,
    AddReceptionistComponent,
    MyprofileComponent,
    EditprofileComponent,
    AdmindashboardComponent,
    DepartmenthomeComponent,
    DoctorshomeComponent,
    DoctorpntComponent,
    AppointmentpntComponent,
    PaymentpntComponent,
    SettingspntComponent,
    ReportpntComponent,
    AddactivitiesComponent,
    UpdateactivitiesComponent,
    ViewactivitiesComponent,
    AddappointmentdocComponent,
    UpdateappointmentdocComponent,
    ViewappointmentdocComponent,
    AddpatientdocComponent,
    UpdatepatientdocComponent,
    ViewpatientdocComponent,
    AddpayrolldocComponent,
    ViewpayrolldocComponent,
    UpdatepayrolldocComponent,
    AddreportdocComponent,
    UpdatereportdocComponent,
    ViewreportdocComponent,
    AddsettingsdocComponent,
    UpdatesettingsdocComponent,
    ViewsettingsdocComponent,
    MyprofiledocComponent,
    EditprofiledocComponent,
    MyprofilenrsComponent,
    EditprofilenrsComponent,
    MyprofilepntComponent,
    EditprofilepntComponent,
    MyprofilerecepComponent,
    EditprofilerecepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
