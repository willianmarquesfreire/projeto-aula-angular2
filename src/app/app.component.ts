import { Component } from '@angular/core';

declare let window:Window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dataNascimento: Date = new Date()
  title = 'app works!';

}
