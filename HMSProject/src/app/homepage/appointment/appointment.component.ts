import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent {

  constructor(private router: Router) { }

  navigetToAppointment(){
    this.router.navigate(['appointment']);
  }
}
