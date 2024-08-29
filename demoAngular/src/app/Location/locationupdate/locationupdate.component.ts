import { Component, OnInit } from '@angular/core';
import { Location } from '../model/location.model';
import { LocationService } from '../service/location.service';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';

@Component({
  selector: 'app-locationupdate',
  templateUrl: './locationupdate.component.html',
  styleUrl: './locationupdate.component.css'
})
export class LocationupdateComponent implements OnInit {

  id: string = "";
  location: Location = new Location();

  constructor(
    private locationService: LocationService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.location = new Location();
    this.id = this.route.snapshot.params['id'];
    this.locationService.getById(this.id)
    .subscribe({
      next: res => {
        this.location = res;
        console.log(res);
      },
      error: error => {
        console.log(error);
      }
    });
  }

  locationUpdate(){
    this.locationService.loationUpdate(this.id, this.location)
    .subscribe({
      next: res => {
        this.location = new Location();
        this.router.navigate(['location'])
      },
      error: error => {
        console.log(error);
      }
    });
  }

}
