import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  form : any = {};

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onRegister()
  {
    this.authservice.SignUp(this.form.email,this.form.password,this.form.uname,this.form.fname)
  }


}
