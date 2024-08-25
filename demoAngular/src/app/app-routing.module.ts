import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './Board/sidebar/sidebar.component';
import { LocationComponent } from './DemoWork/location/location.component';
import { LocationcreateComponent } from './DemoWork/locationcreate/locationcreate.component';
import { LocationupdateComponent } from './DemoWork/locationupdate/locationupdate.component';


const routes: Routes = [
  {path: 'sidebar', component: SidebarComponent},
  {path: 'location', component: LocationComponent},
  {path: 'locationcreate', component: LocationcreateComponent},
  {path: 'locationupdate/:id', component: LocationupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
