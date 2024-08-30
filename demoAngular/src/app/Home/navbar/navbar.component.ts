import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';
import { UserModel } from '../Model/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  userRole: string | null = '';
  currentUser: UserModel | null = null;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe(user => {
      this.currentUser = user;
      this.userRole = user?.role || null;
    });
  }
  
}