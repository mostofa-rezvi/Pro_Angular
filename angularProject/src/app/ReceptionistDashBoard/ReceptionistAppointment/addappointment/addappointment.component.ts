import { Component } from '@angular/core';
import { RecepappointmentService } from '../../Service/recepappointment.service';
import { RecepAppointment } from '../../Model/recepappointment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addappointment',
  templateUrl: './addappointment.component.html',
  styleUrl: './addappointment.component.css'
})
export class AddappointmentComponent {
  appointment: RecepAppointment = new RecepAppointment();

  constructor(private appointmentService: RecepappointmentService, private router: Router) { }

  onSubmit(): void {
    this.appointmentService.addAppointment(this.appointment).subscribe(() => {
      this.router.navigate(['/viewappointment']);
    });
  }
}
