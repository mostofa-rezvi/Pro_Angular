import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Board/sidebar/sidebar.component';
import { LocationComponent } from './Location/location/location.component';
import { LocationcreateComponent } from './Location/locationcreate/locationcreate.component';
import { LocationupdateComponent } from './Location/locationupdate/locationupdate.component';
import { StudentviewComponent } from './Student/studentview/studentview.component';
import { StudentaddComponent } from './Student/studentadd/studentadd.component';
import { StudentupdateComponent } from './Student/studentupdate/studentupdate.component';
import { RegistrationComponent } from './Home/registration/registration.component';
import { LoginComponent } from './Home/login/login.component';
import { AuthGuard } from './Home/Guard/authguard.guard';
import { LogoutComponent } from './Home/logout/logout.component';
import { UserprofileComponent } from './Home/userprofile/userprofile.component';
import { RoleGuard } from './Home/Guard/role.guard';


const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent},
  {path: 'location', component: LocationComponent, canActivate:[AuthGuard, RoleGuard]},
  {path: 'locationcreate', component: LocationcreateComponent, canActivate:[AuthGuard, RoleGuard],
    data: {role: 'Admin'}
  },
  {path: 'locationupdate/:id', component: LocationupdateComponent, canActivate:[AuthGuard, RoleGuard]},
  {path: 'studentview', component: StudentviewComponent, canActivate:[AuthGuard, RoleGuard]},
  {path: 'studentadd', component: StudentaddComponent, canActivate:[AuthGuard, RoleGuard]},
  {path: 'studentupdate/:id', component: StudentupdateComponent, canActivate:[AuthGuard, RoleGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: 'login', pathMatch: 'full'},
  {path: 'logout', component: LogoutComponent},
  {path: 'userprofile', component: UserprofileComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
