import { Component, OnInit } from '@angular/core';
import { StudentService } from '../Service/student.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LocationService } from '../../Location/service/location.service';
import { forkJoin } from 'rxjs';
import { error } from 'console';
import { Student } from '../Model/student.model';

@Component({
  selector: 'app-studentview',
  templateUrl: './studentview.component.html',
  styleUrl: './studentview.component.css'
})
export class StudentviewComponent implements OnInit {

  students: any;
  locations: any;

  constructor(
    private studentService: StudentService,
    private httpClient: HttpClient,
    private router: Router,
    private locationService: LocationService
  ){}

  ngOnInit(): void {
    this.loadStudent();
  }

  loadStudent(): void{
    forkJoin({
      locations: this.locationService.getLocationForStudent(),
      students: this.studentService.getAllStudent()
    }).subscribe({
      next: ({locations, students}) => {
        this.locations = locations;
        this.students = students;
      },
      error: error => {
        console.log(error);
      }
    });
  }

  studentDelete(id: string):void{
    this.studentService.studentDelete(id)
      .subscribe({
        next: res => {
          this.loadStudent();
        },
        error: error => {
          console.log(error);
        }
      });
  }

  studentUpdate(student: Student): void{
    this.router.navigate(['studentupdate', student.id]);
  }
}
