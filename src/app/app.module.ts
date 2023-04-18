import { AppRooutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NovoComponenteComponent } from './paginas/novo-componente/novo-componente.component';
import { DiretivasComponent } from './diretivas/diretivas.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    AppComponent,
    NovoComponenteComponent,
    DiretivasComponent,
    DataBindingComponent,
    HomeComponent,
    ProdutosComponent,
    PedidosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRooutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
