import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  constructor(private router: Router) {
  }

  validUser: boolean;
  username: string;

  ngOnInit() {
    this.validUser = this.validUser2();
    this.username = localStorage.getItem('username');
  }

   validUser2() {
    if (!(localStorage.getItem('isLoggedin') === 'true')) {
          this.router.navigate(['/login']);
          return false;
    } else {
          return true;
    }
  }

  logout() {
    // token=null;

    localStorage.removeItem('access_token');
    localStorage.removeItem('username');
    localStorage.setItem('isLoggedin', 'false');
    this.validUser = this.validUser2();
    this.router.navigate(['/']);
  }
}
