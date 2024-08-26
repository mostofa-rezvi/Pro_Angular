import { Component, OnInit } from '@angular/core';
import { LocationService } from '../service/location.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { error } from 'console';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrl: './location.component.css'
})
export class LocationComponent implements OnInit{

  locations: any;

  constructor(
    private locationService: LocationService,
    private router: Router,
    private httpClient: HttpClient
  ){}

  ngOnInit(): void {
    this.locations = this.locationService.getAllLocation();
  }

  locationDelete(id: string) {
    this.locationService.locationDelete(id)
    .subscribe({
      next: res => {
        this.locations = this.locationService.getAllLocation();
        // this.router.navigate(['/location']);
      },
      error: error => {
        console.log(error);
      }
    })
  }

  locationUpdate(id: string){
    this.router.navigate(['locationupdate/' + id]);
  }
}
