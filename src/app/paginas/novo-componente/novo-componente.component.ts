import { Component } from '@angular/core';

@Component({
  selector: 'app-novo-componente',
  templateUrl: './novo-componente.component.html',
  styleUrls: ['./novo-componente.component.css']
})
export class NovoComponenteComponent {
  constructor() { }

  ngOnInit(): void {
    var numero : number = 42;
    let palavra: string = "mensagem"
    const pi : number = 3.14;

    console.log("Número: " + numero);
    console.log("Palavra: " + palavra);
    console.log("PI: " + 3.14);
  }
}
