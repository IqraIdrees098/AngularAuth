import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  fname = "";
  uname = "";
  email = "";
  password = "";

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit() {
  }
 
  register(){
    this.authservice.SignUp(this.fname,this.uname, this.email,this.password);
 
  }


}
