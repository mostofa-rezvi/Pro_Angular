import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../Service/doctor.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-doctorview',
  templateUrl: './doctorview.component.html',
  styleUrl: './doctorview.component.css'
})
export class DoctorviewComponent implements OnInit{
  
  doctors: any;
  
  constructor(
    private doctorService: DoctorService,
    private httpClient: HttpClient,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.doctors = this.doctorService.getAllDoctor();
  }

  doctorDelete(id: string){
    this.doctorService.doctorDelete(id)
      .subscribe({
        next: res => {
          this.doctors = this.doctorService.getAllDoctor();
          // this.router.navigate(['/doctorview']);
        },
        error: error => {
          console.log(error);
        }
      });
  }
}
