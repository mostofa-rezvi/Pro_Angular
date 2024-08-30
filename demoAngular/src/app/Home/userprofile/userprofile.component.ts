import { Component } from '@angular/core';
import { UserModel } from '../Model/user.model';
import { UserprofileService } from '../Service/userprofile.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css'
})
export class UserprofileComponent {

  user!: UserModel;

  private subscription: Subscription = new Subscription();

  constructor(
    private userProfileService: UserprofileService,
    private router: Router
  ) { }

  ngOnInt(): void {
    this.loadUserProfile();
  }

  loadUserProfile(): void {
    const sub = this.userProfileService.getUserProfile().subscribe({
      next: user => {
        if (user) {
          this.user = user;
        }
      },
      error: error => {
        console.error('Error loading user profile:', error);
      }
    });
    this.subscription.add(sub);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
