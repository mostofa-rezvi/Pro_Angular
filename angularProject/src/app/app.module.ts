import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { DoctoraddComponent } from './Doctor/doctoradd/doctoradd.component';
import { DoctorviewComponent } from './Doctor/doctorview/doctorview.component';
import { DoctorupdateComponent } from './Doctor/doctorupdate/doctorupdate.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    ActivitiesComponent,
    DoctoraddComponent,
    DoctorviewComponent,
    DoctorupdateComponent
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
