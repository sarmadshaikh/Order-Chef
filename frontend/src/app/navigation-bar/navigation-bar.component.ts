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

  ngOnInit() {
    this.validUser = true;
    // if (token)
    //   this.validUser=true;
    // else
    //   this.validUser=false;
  }

  logout() {
    //token=null;
    this.validUser = false;
    this.router.navigate(['/login']);
  }
}
