import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'produtos', component: ProdutosComponent},
  { path: 'pedidos', component: PedidosComponent}
];

@NgModule({
  imports : [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRooutingModule {}
