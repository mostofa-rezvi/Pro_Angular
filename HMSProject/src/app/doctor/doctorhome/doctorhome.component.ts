import { Component } from '@angular/core';

@Component({
  selector: 'app-doctorhome',
  templateUrl: './doctorhome.component.html',
  styleUrl: './doctorhome.component.css'
})
export class DoctorhomeComponent {
  constructor() { }

  ngOnInit(): void {
    this.initSidebarToggle();
  }

  initSidebarToggle(): void {
    const toggleBtn = document.getElementById('toggle_btn');
    const sidebar = document.getElementById('sidebar');
    const mobileBtn = document.getElementById('mobile_btn');

    toggleBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('active');
    });

    mobileBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('active');
    });
  }

  openMsgBox(): void {
    // Logic to open message box
  }

  handleNotificationClick(): void {
    // Logic to handle notification click
  }
}
