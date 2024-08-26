import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { DoctoraddComponent } from './Doctor/doctoradd/doctoradd.component';
import { DoctorviewComponent } from './Doctor/doctorview/doctorview.component';
import { DoctorupdateComponent } from './Doctor/doctorupdate/doctorupdate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { DoctorprofileComponent } from './Doctor/doctorprofile/doctorprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ActivitiesComponent,
    DoctoraddComponent,
    DoctorviewComponent,
    DoctorupdateComponent,
    DoctorprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
