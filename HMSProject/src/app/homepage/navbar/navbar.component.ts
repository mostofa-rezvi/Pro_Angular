import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{
  constructor(
    private router: Router
  ){}

  navigateToAppointment(event: Event){
    event.preventDefault();
    this.router.navigate(["/appointment"]);
  }

}
