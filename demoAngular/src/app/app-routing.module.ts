import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Board/sidebar/sidebar.component';
import { LocationComponent } from './Location/location/location.component';
import { LocationcreateComponent } from './Location/locationcreate/locationcreate.component';
import { LocationupdateComponent } from './Location/locationupdate/locationupdate.component';
import { StudentviewComponent } from './Student/studentview/studentview.component';
import { StudentaddComponent } from './Student/studentadd/studentadd.component';
import { StudentupdateComponent } from './Student/studentupdate/studentupdate.component';


const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent},
  {path: 'location', component: LocationComponent},
  {path: 'locationcreate', component: LocationcreateComponent},
  {path: 'locationupdate/:id', component: LocationupdateComponent},
  {path: 'studentview', component: StudentviewComponent},
  {path: 'studentadd', component: StudentaddComponent},
  {path: 'studentupdate/:id', component: StudentupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
