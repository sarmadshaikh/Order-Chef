import {Component, OnInit} from '@angular/core';
import {GeneralService} from "../Services/general.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm: any;
  newUser: NewUser;
  signUpForm: FormGroup;
  // loading = false;
  submitted = false;
  error: string;

  constructor(private API: GeneralService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      cnfPassword: ['', Validators.required],
    });
  }

  get f() {
    return this.signUpForm.controls;
  }

  userSignin() {
    this.submitted = true;
    if (this.signUpForm.invalid){
      return;
    }

    if (this.f.password.value !== this.f.cnfPassword.value){
      return alert('Passwords should match');
    }

    this.newUser = {
      first_name: this.f.firstName.value,
      last_name: this.f.lastName.value,
      email: this.f.email.value,
      username: this.f.username.value,
      password: this.f.password.value
    };

    this.API.signUpAPI(this.newUser).subscribe(() => {
      alert('User registration successful');
      this.router.navigate(['/']);
    },
      error => {
      this.error = 'Unable to register user. Please enter valid details';
      });
 }
}

export class NewUser {
  first_name: string;
  last_name: string;
  email: string;
  username: string;
  password: string;
}
