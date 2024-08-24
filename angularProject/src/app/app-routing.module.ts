import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ActivitiesComponent } from './dashboard/activities/activities.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: 'activities', component: ActivitiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
