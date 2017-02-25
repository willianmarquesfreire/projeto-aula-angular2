import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  template: `
    <p #meuNome>Meu nome é {{nome}}.</p>
  `,
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  nome: String = "Munif Gebara Júnior";
  @ViewChild("meuNome") meuNome: HTMLElement;

  constructor() { }

  ngOnInit() {
    console.log(this.meuNome)
  }

}
