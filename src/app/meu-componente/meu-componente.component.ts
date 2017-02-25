import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  template: `
    <p>Meu nome é {{nome}}.</p>
    <input type="text" [value]="valor" readonly>
    <button type="button" (click)="incrementaValor()">Incrementar Valor</button>
  `,
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  valor: number = 0;
  @Input("nome") nome: String = "";
  @Output("mudouValor") mudouValor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  incrementaValor() {
    this.valor++;
    this.mudouValor.emit({valor: this.valor});
  }

}
