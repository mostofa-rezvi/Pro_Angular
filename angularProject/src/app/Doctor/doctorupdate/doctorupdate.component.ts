import { Component, OnInit } from '@angular/core';
import { Doctor } from '../Model/doctor.model';
import { DoctorService } from '../Service/doctor.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-doctorupdate',
  templateUrl: './doctorupdate.component.html',
  styleUrl: './doctorupdate.component.css'
})
export class DoctorupdateComponent implements OnInit{

  id: string = "";
  doctor: Doctor = new Doctor();

  constructor(
    private doctorService: DoctorService,
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.doctor = new Doctor();
    this.id = this.route.snapshot.params['id'];
    this.doctorService.getById(this.id)
      .subscribe({
        next: res => {
          this.doctor = res;
          console.log(res);
        },
        error: error => {
          console.log(error);
        }
    });
  }

  doctorUpdate(){
    this.doctorService.doctorUpdate(this.id, this.doctor)
      .subscribe({
        next: res => {
          // this.doctor = new Doctor();
          this.router.navigate(['doctorview']);
        },
        error: error => {
          console.log(error);
        }
      });
  }

}
