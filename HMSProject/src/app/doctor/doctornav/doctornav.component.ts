import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctornav',
  templateUrl: './doctornav.component.html',
  styleUrl: './doctornav.component.css'
})
export class DoctornavComponent {
  constructor(
    private router: Router
  ) { }

  navigateToAppointment(event: Event) {
    event.preventDefault();
    this.router.navigate(["/doctor"]);
  }
}
