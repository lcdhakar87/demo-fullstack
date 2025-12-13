import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  auth = inject(Auth);
   
  constructor(private router: Router){}
  logout() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

}
