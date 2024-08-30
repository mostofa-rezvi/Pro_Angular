import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './DemoWork/teacher/teacher.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { SidebarComponent } from './Board/sidebar/sidebar.component';
import { LocationComponent } from './Location/location/location.component';
import { LocationcreateComponent } from './Location/locationcreate/locationcreate.component';
import { LocationupdateComponent } from './Location/locationupdate/locationupdate.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StudentviewComponent } from './Student/studentview/studentview.component';
import { StudentupdateComponent } from './Student/studentupdate/studentupdate.component';
import { StudentaddComponent } from './Student/studentadd/studentadd.component';
import { LoginComponent } from './Home/login/login.component';
import { RegistrationComponent } from './Home/registration/registration.component';
import { LogoutComponent } from './Home/logout/logout.component';
import { UserprofileComponent } from './Home/userprofile/userprofile.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LocationComponent,
    LocationcreateComponent,
    LocationupdateComponent,
    StudentviewComponent,
    StudentupdateComponent,
    StudentaddComponent,
    LoginComponent,
    RegistrationComponent,
    LogoutComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
