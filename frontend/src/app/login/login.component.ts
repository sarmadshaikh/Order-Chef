import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {GeneralService} from '../Services/general.service';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: any;
  userCred: Customer;
  token: string;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;

  constructor(private API: GeneralService, private formBuilder: FormBuilder, private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  userLogin() {
    this.submitted = true;
    this.userCred = {
      username: this.f.username.value,
      password: this.f.password.value
    };
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    this.API.LogIn(this.userCred).subscribe((token: string) => {
        this.token = token['token'];
        // window.alert(this.token);
       // console.log(this.token);
        localStorage.setItem('access_token', this.token);
        localStorage.setItem('isLoggedin', 'true');
        localStorage.setItem('username', this.userCred.username);
        this.router.navigate(['/']);
      },
      error => {
        this.error = 'Username or password is not correct';
        this.loading = false;
      });
  }
}
