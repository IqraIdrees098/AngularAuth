import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

form : any = {};
 

  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {}


  onSubmit()
  {
      this.authservice.SignIn(this.form.email,this.form.password)
  }


}
