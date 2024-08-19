import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './homepage/appointment/appointment.component';
import { BodypartComponent } from './homepage/bodypart/bodypart.component';

const routes: Routes = [
  {path: 'appointment', component: AppointmentComponent},
  {path: '' , component: BodypartComponent},
  { path: '', redirectTo: '/appointment', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
