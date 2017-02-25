import { Component } from '@angular/core';

declare let window:Window;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';

  onValor(event) {
    window.alert("Recebi de meu-componente o valor: " + event.valor)
  }
}
