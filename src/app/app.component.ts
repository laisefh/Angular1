import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nomes: String[]

  constructor(){
    this.nomes = ["Fulano", "Beltrano", "Ciclano"]
  }
  title = 'projeto1';
}
