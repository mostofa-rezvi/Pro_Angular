import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointmenthome',
  templateUrl: './appointmenthome.component.html',
  styleUrl: './appointmenthome.component.css'
})
export class AppointmenthomeComponent {
  constructor(private router: Router) { }

  navigetToAppointment() {
    this.router.navigate(['appointment']);
  }
}
