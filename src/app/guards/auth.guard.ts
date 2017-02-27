import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { User } from '../login/user';

declare var window;

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
  user: User;
  constructor(
    private router: Router
  ) {
  }
  canActivate() {
    return true;
  }
  canLoad() {
    this.user = JSON.parse(window.localStorage.getItem('user'));
    if (this.user && this.user.token) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}