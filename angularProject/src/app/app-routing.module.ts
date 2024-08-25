import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './dashboard/activities/activities.component';
import { DoctorviewComponent } from './Doctor/doctorview/doctorview.component';
import { DoctoraddComponent } from './Doctor/doctoradd/doctoradd.component';

const routes: Routes = [
  {path: 'activities', component: ActivitiesComponent},
  {path: 'doctorview', component: DoctorviewComponent},
  {path: 'doctoradd', component: DoctoraddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
