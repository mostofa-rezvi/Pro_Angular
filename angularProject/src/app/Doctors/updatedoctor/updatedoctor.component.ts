import { Component, OnInit } from '@angular/core';
import { DoctorModel } from '../Model/doctor.model';
import { DoctorService } from '../Service/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatedoctor',
  templateUrl: './updatedoctor.component.html',
  styleUrl: './updatedoctor.component.css'
})
export class UpdatedoctorComponent  implements OnInit {
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

  onSubmit() {
    this.doctorService.updateDoctor(this.doctor).subscribe(() => {
      this.router.navigate(['/viewdoctor']);
    });
  }

}
