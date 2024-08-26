import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { DoctorviewComponent } from './Doctor/doctorview/doctorview.component';
import { DoctoraddComponent } from './Doctor/doctoradd/doctoradd.component';
import { DoctorprofileComponent } from './Doctor/doctorprofile/doctorprofile.component';
import { DoctorupdateComponent } from './Doctor/doctorupdate/doctorupdate.component';

const routes: Routes = [
  {path: 'activities', component: ActivitiesComponent},
  {path: 'doctorview', component: DoctorviewComponent},
  {path: 'doctoradd', component: DoctoraddComponent},
  {path: 'doctorprofile', component: DoctorprofileComponent},
  {path: 'doctorupdate', component: DoctorupdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
