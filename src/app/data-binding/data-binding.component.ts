import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
    nome: String = "Fulano";
    tamanho: String = "200";
    url: String = "https://www.ifsc.edu.br/image/layout_set_logo?img_id=902745&t=1677950697448";
    esconderText: boolean = true;
    valorDigitado: String = "";
    isMouseOver: boolean = false;

    clique(){
      alert('ação do botão');
    }

    onKeyUp(event: KeyboardEvent){
      let entrada = <HTMLInputElement> event.target;
      this.valorDigitado = entrada.value;
    }

    onMouseOver(){
      this.isMouseOver = true;
    }
    onMouseOut(){
      this.isMouseOver = false;
    }

    getValor(){
      return 1;
    }
    constructor(){}
      ngOnInit(): void{
    }
}
