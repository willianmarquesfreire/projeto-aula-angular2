import { Component } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';

declare var window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  constructor(private router: Router) {

  }

  logout() {
    window.localStorage.removeItem('user');
  }
}
