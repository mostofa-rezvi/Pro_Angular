import { Component, OnInit } from '@angular/core';
import { PatientProfileModel } from '../../Model/patientprofile.model';
import { PatientprofileService } from '../../Service/patientprofile.service';

@Component({
  selector: 'app-myprofilepnt',
  templateUrl: './myprofilepnt.component.html',
  styleUrl: './myprofilepnt.component.css'
})
export class MyprofilepntComponent implements OnInit {
  profile!: PatientProfileModel;

  constructor(private profileService: PatientprofileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe((data: PatientProfileModel) => {
      this.profile = data;
    });
  }
}