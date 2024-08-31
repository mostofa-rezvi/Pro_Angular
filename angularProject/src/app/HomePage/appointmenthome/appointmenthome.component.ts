import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppointmenthomeService } from './appointmenthome.service';
import { RecepAppointment } from '../../ReceptionistDashBoard/Model/recepappointment.model';

@Component({
  selector: 'app-appointmenthome',
  templateUrl: './appointmenthome.component.html',
  styleUrl: './appointmenthome.component.css'
})
export class AppointmenthomeComponent implements OnInit {
  departments: any[] = [];
  doctors: any[] = [];
  appointment: RecepAppointment = new RecepAppointment();

  constructor(private appointmentService: AppointmenthomeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.appointmentService.getDepartments().subscribe(data => {
      this.departments = data;
    });
  }

  onDepartmentChange(event: Event) {
    const target = event.target as HTMLSelectElement;
    const departmentId = +target.value; // Convert the string to a number
    this.appointmentService.getDoctorsByDepartment(departmentId).subscribe(data => {
      this.doctors = data;
    });
  }

  onSubmit(): void {
    this.appointmentService.appointment(this.appointment).subscribe(() => {
      this.router.navigate(['/viewappointment']);
    });
  }
}
