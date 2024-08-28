import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { LocationService } from '../../Location/service/location.service';
import { HttpClient } from '@angular/common/http';
import { Location } from '../../Location/model/location.model';
import { Student } from '../Model/student.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentadd',
  templateUrl: './studentadd.component.html',
  styleUrl: './studentadd.component.css'
})
export class StudentaddComponent implements OnInit {

  locations: Location[] = [];
  students: Student[] = [];
  formValue!: FormGroup;
  student: Student = new Student();

  constructor(
    private studentService: StudentService,
    private locationService: LocationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loadLocation();
    this.formValue = this.formBuilder.group({
      name: [''],
      email: [''],
      cell: [''],
      location: this.formBuilder.group({
        id: [undefined],
        name: [undefined],
        city: [undefined],
        state: [undefined],
        photo: [undefined],
        wifi: [undefined],
        laundry: [undefined]
      })
    });

    this.formValue.get('location')?.get('name')?.valueChanges.subscribe(name => {
      const selectedLocation = this.locations.find(location => location.name === name);
      if (selectedLocation) {
        this.formValue.patchValue({ location: selectedLocation });
      }
    });
  }

  loadLocation() {
    this.locationService.getLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: error => {
          console.log(error);
        }
      });
  }

  studentAdd() {
    this.student.name = this.formValue.value.name;
    this.student.email = this.formValue.value.email;
    this.student.cell = this.formValue.value.cell;
    this.student.location = this.formValue.value.location;

    this.studentService.studentAdd(this.student)
      .subscribe({
        next: res => {
          this.loadLocation();
          this.formValue.reset();
          this.router.navigate(['studentview']);
        },
        error: error => {
          console.log(error);
        }
      });
  }

}
