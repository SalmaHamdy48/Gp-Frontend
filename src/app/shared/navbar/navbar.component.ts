import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isLoginPage = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
  // تحقق أول مرة من URL الحالي
  this.isLoginPage = this.router.url.startsWith('/login');

  // اشترك في أي تغييرات لاحقة
  this.router.events.subscribe(event => {
    if (event instanceof NavigationEnd) {
      this.isLoginPage = event.urlAfterRedirects.startsWith('/login');
    }
  });
}

  signOut() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}