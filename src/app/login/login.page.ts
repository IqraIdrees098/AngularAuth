import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  email = "";
  password = "";


  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  login()
  {
   this.authservice.SignIn(this.email,this.password);
  
  }


}
