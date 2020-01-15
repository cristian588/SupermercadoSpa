import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      alert('Logged in successfully');
    }, error => {
      alert(error);
    }, () => {
      this.router.navigate(['/home']);
    });
  }

  loggedIn() {
    const user = localStorage.getItem('user');
    if (user == null) {
      return false;
    }
    return true;
  }

  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
}
