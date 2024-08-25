import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeacherComponent } from './DemoWork/teacher/teacher.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { FooterComponent } from './Home/footer/footer.component';
import { SidebarComponent } from './Board/sidebar/sidebar.component';
import { LocationComponent } from './DemoWork/location/location.component';
import { LocationcreateComponent } from './DemoWork/locationcreate/locationcreate.component';
import { LocationupdateComponent } from './DemoWork/locationupdate/locationupdate.component';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    NavbarComponent,
    FooterComponent,
    SidebarComponent,
    LocationComponent,
    LocationcreateComponent,
    LocationupdateComponent
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
