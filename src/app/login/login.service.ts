import { Router } from '@angular/router';
import { Injectable, EventEmitter } from '@angular/core';

import { User } from './user';

declare var window;

@Injectable()
export class LoginService {


  showMenuEmitter = new EventEmitter<boolean>();

  constructor(private router: Router) { }

  doLogin(user: User) {
    console.log("kdsf")
    if (user.login === 'usuario@email.com' &&
      user.password === '123456') {

      user.token = Math.random.toString();

      window.localStorage.setItem('user', JSON.stringify(user));

      this.router.navigate(['/home']);

    } else {
      this.router.navigate(['/login']);
    }
  }


}