import {Component, OnInit} from '@angular/core';

import {GeneralService} from '../Services/general.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: any;
  constructor( private sloginAPI: GeneralService) { }

  ngOnInit() {
  }

 userLogin(username, email, password) {
let customer = {email: 'admin@example.com',
      password: 'admin',
      username: 'admin'
    };
window.alert('hello from the other side' + JSON.stringify(this.sloginAPI.loginAPI(customer)));
 }
}
