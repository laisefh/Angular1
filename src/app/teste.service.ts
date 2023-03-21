import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TesteService {
     nomes: String[]
  constructor() {
    this.nomes = ["Fulano", "Beltrano", "Ciclano"]
  }
  getNomes(): String[]{
    return this.nomes
  }
}
