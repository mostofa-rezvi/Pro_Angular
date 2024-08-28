import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '../../Location/model/location.model';
import { Student } from '../Model/student.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../Location/service/location.service';
import { StudentService } from '../Service/student.service';
import { error } from 'console';

@Component({
  selector: 'app-studentupdate',
  templateUrl: './studentupdate.component.html',
  styleUrl: './studentupdate.component.css'
})
export class StudentupdateComponent {

  formValue!: FormGroup;
  locations: Location[] = [];
  id: string = "";
  student: Student = new Student();

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private locationService: LocationService,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

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

    this.loadLocation();
    this.loadStudent();
  }

  loadLocation(): void{
    this.locationService.getLocationForStudent()
      .subscribe({
        next: res => {
          this.locations = res;
        },
        error: error => {
          console.log(error);
        }
      })
  }

  loadStudent(): void{
    this.studentService.getStudentById(this.id)
      .subscribe({
        next: (student: Student) => {
          this.student = student;
          this.formValue.patchValue({
            name: student.name,
            email: student.email,
            cell: student.cell,
            location: student.location
          });
        },
        error: error => {
          console.log(error);
        }
      })
  }

  studentUpdate(): void{
    const studentUpdate: Student = {
      ...this.student,
      ...this.formValue.value
    };

    this.studentService.studentUpdate(studentUpdate)
      .subscribe({
        next: res => {
          console.log('Student Updated Successfully.', res);
          this.router.navigate(['studentview']);
        },
        error: error => {
          console.log('Error Updating Student', error);
        }
      })
  }
}
