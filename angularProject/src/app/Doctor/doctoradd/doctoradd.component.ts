import { Component, OnInit } from '@angular/core';
import { Doctor } from '../Model/doctor.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DoctorService } from '../Service/doctor.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-doctoradd',
  templateUrl: './doctoradd.component.html',
  styleUrl: './doctoradd.component.css'
})
export class DoctoraddComponent implements OnInit {

  doctor: Doctor = new Doctor();
  formValue !: FormGroup;
  doctorData: any;

  constructor(
    private doctorService: DoctorService,
    private httpClient: HttpClient,
    private router: Router,
    private formBuilder: FormBuilder
  ){}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      username: [''],
      email: [''],
      password: [''],
      confirmpassword: [''],
      dob:[''],
      gender: ['',  Validators.required],
      address: [''],
      country: [''],
      city: [''],
      postalcode: [''],
      phone: [''],
      avater: [''],
      biography: ['']
    })
  }

  doctorAdd(){
    this.doctor.firstname = this.formValue.value.firstname;
    this.doctor.lastname = this.formValue.value.lastname;
    this.doctor.username = this.formValue.value.username;
    this.doctor.email = this.formValue.value.email;
    this.doctor.password = this.formValue.value.password;
    this.doctor.confirmpassword = this.formValue.value.confirmpassword;
    this.doctor.dob = this.formValue.value.dob;
    this.doctor.gender = this.formValue.value.gender;
    this.doctor.address = this.formValue.value.address;
    this.doctor.country = this.formValue.value.country;
    this.doctor.city = this.formValue.value.city;
    this.doctor.postalcode = this.formValue.value.postalcode;
    this.doctor.phone = this.formValue.value.phone;
    this.doctor.avater = this.formValue.value.avater;
    this.doctor.biography = this.formValue.value.biography;

    this.doctorService.doctorAdd(this.doctor)
      .subscribe({
        next: res => {
          console.log(res);
          this.formValue.reset();
          this.router.navigate(['doctorview']);
        },
        error: error => {
          console.log(error);
        }
      });
  }

}
