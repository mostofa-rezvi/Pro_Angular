import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Service/doctor.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrl: './doctorprofile.component.css'
})
export class DoctorprofileComponent implements OnInit{
  
  doctors: any;

  constructor(
    private doctorService: DoctorService,
    private httpClient: HttpClient,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.doctors = this.doctorService.getAllDoctor();
  }

}
