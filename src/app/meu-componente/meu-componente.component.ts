import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {

  nome: String = "Munif Gebara Júnior";
  @ViewChild("meuNome") meuNome: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

}
