import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../location/location.service';
import { StudentserviceService } from '../student.service';
import { Observable } from 'rxjs';
import { Location } from '../../location/location.model';
import { StudentModel } from '../student.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createstudent',
  templateUrl: './createstudent.component.html',
  styleUrl: './createstudent.component.css'
})
export class CreatestudentComponent implements OnInit {

  locations: Location[]=[];
  students: StudentModel[]=[];
  studentForm!: FormGroup;
  student: StudentModel = new StudentModel();

  constructor(
    private locationService: LocationService,
    private StudentService: StudentserviceService,
    private fromBulder: FormBuilder
  ){
    
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.loadLocation();
    
    this.studentForm = this.fromBulder.group({
      name:[''],
      email:[''],
      cell:[''],
      location:[null]
    })
  }

  loadLocation(){
    this.locationService.getLocationForStudent()

    .subscribe({
      next: res => {
        this.locations = res;
      },
      error: err => {
        console.log(err);
      }
    });
  }

  createStudent(){

    this.student.name = this.studentForm.value.name;
    this.student.email = this.studentForm.value.email;
    this.student.cell = this.studentForm.value.cell;
    this.student.location = this.studentForm.value.location;

    // this.student = {...this.studentForm.value};

    // const studentData: StudentModel = this.student;

    this.StudentService.createStudent(this.student)
    .subscribe({
      next: res => {
        this.studentForm.reset();
        this.loadLocation();
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
