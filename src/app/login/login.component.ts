import { Component, OnInit, ViewChild } from '@angular/core';

import { LoginService } from './login.service';
import { User } from './user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(public loginService: LoginService) { }

  ngOnInit() {
    
  }

  doLogin(login, password){
    this.user.login = login;
    this.user.password = password;
    this.loginService.doLogin(this.user);
  }

}