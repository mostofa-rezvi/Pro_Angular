import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { ActiveComponent } from './active/active.component';

const routes: Routes = [
  {path: 'employee', component: EmployeeComponent},
  {path: '', component: ActiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
