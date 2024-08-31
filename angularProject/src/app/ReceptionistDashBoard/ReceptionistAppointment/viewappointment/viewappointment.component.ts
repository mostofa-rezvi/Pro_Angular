import { Component, OnInit } from '@angular/core';
import { RecepAppointment } from '../../Model/recepappointment.model';
import { RecepappointmentService } from '../../Service/recepappointment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewappointment',
  templateUrl: './viewappointment.component.html',
  styleUrl: './viewappointment.component.css'
})
export class ViewappointmentComponent implements OnInit {
  appointments: RecepAppointment[] = [];

  constructor(private appointmentService: RecepappointmentService, private router: Router) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe((data) => {
      this.appointments = data;
    });
  }

  editAppointment(id: string): void {
    this.router.navigate(['/updateappointment', id]);
  }

  deleteAppointment(id: string): void {
    this.appointmentService.deleteAppointment(id).subscribe(() => {
      this.appointments = this.appointments.filter(appointment => appointment.id !== id);
    });
  }
}