import {Component, OnInit} from '@angular/core';

import {GeneralService} from '../Services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: any;
todaydate;
  constructor( private sloginAPI: GeneralService) { }

  ngOnInit() {
    this.todaydate = this.sloginAPI.loginAPI();
  }
 userLogin(email) {
    window.alert('hello from the other side' + JSON.stringify(email));
 }
}