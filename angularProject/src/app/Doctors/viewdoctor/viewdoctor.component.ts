import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../Model/doctor.model';
import { DoctorService } from '../Service/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewdoctor',
  templateUrl: './viewdoctor.component.html',
  styleUrl: './viewdoctor.component.css'
})
export class ViewdoctorComponent implements OnInit {
  doctor!: DoctorModel;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.doctorService.getDoctor(id).subscribe(doctor => this.doctor = doctor);
  }

  editDoctor() {
    this.router.navigate(['/editdoctor', this.doctor.id]);
  }
}
