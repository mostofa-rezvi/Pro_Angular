import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { BodypartComponent } from './homepage/bodypart/bodypart.component';
import { AppointmentComponent } from './homepage/appointment/appointment.component';
import { LoginComponent } from './registration/login/login.component';
import { RegisterComponent } from './registration/register/register.component';
import { ForgotpasswordComponent } from './registration/forgotpassword/forgotpassword.component';
import { DoctordashboardComponent } from './doctor/doctorsidebar/doctordashboard/doctordashboard.component';
import { DoctorprofileComponent } from './doctor/doctorsidebar/doctorprofile/doctorprofile.component';
import { DoctoractivitiesComponent } from './doctor/doctorsidebar/doctoractivities/doctoractivities.component';
import { DoctornavComponent } from './doctor/doctornav/doctornav.component';
import { DoctorpatientsComponent } from './doctor/doctorsidebar/doctorpatients/doctorpatients.component';
import { DoctorappointmentslistComponent } from './doctor/doctorsidebar/doctorappointmentslist/doctorappointmentslist.component';
import { DoctorsalaryComponent } from './doctor/doctorsidebar/doctoraccount/doctorsalary/doctorsalary.component';
import { DoctortaxesComponent } from './doctor/doctorsidebar/doctoraccount/doctortaxes/doctortaxes.component';
import { DoctorprovidentfundComponent } from './doctor/doctorsidebar/doctoraccount/doctorprovidentfund/doctorprovidentfund.component';
import { DoctorattendanceComponent } from './doctor/doctorsidebar/doctorpayroll/doctorattendance/doctorattendance.component';
import { DoctorholidaysComponent } from './doctor/doctorsidebar/doctorpayroll/doctorholidays/doctorholidays.component';
import { DoctorleaveComponent } from './doctor/doctorsidebar/doctorpayroll/doctorleave/doctorleave.component';
import { DoctorchangepasswordComponent } from './doctor/doctorsidebar/doctorsettings/doctorchangepassword/doctorchangepassword.component';
import { DoctoreditprofileComponent } from './doctor/doctorsidebar/doctorsettings/doctoreditprofile/doctoreditprofile.component';
import { CalenderComponent } from './doctor/calender/calender.component';
import { DoctorhomeComponent } from './doctor/doctorhome/doctorhome.component';
import { DoctorsidebarComponent } from './doctor/doctorsidebar/doctorsidebar/doctorsidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BodypartComponent,
    AppointmentComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    DoctordashboardComponent,
    DoctorprofileComponent,
    DoctoractivitiesComponent,
    DoctornavComponent,
    DoctorpatientsComponent,
    DoctorappointmentslistComponent,
    DoctorsalaryComponent,
    DoctortaxesComponent,
    DoctorprovidentfundComponent,
    DoctorattendanceComponent,
    DoctorholidaysComponent,
    DoctorleaveComponent,
    DoctorchangepasswordComponent,
    DoctoreditprofileComponent,
    CalenderComponent,
    DoctorhomeComponent,
    DoctorsidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
