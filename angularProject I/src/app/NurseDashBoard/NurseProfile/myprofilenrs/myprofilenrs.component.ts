import { Component, OnInit } from '@angular/core';
import { NurseProfileModel } from '../../Model/nurseprofile.model';
import { NurseprofileService } from '../../Service/nurseprofile.service';

@Component({
  selector: 'app-myprofilenrs',
  templateUrl: './myprofilenrs.component.html',
  styleUrl: './myprofilenrs.component.css'
})
export class MyprofilenrsComponent implements OnInit {
  profile!: NurseProfileModel;

  constructor(private profileService: NurseprofileService) { }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.profileService.getProfile().subscribe((data: NurseProfileModel) => {
      this.profile = data;
    });
  }
}