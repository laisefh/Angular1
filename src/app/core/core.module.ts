import { AppRooutingModule } from './../app-routing.module';
import { NovoComponenteComponent } from './../paginas/novo-componente/novo-componente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ],
  imports: [
    CommonModule,
    AppRooutingModule
  ],
  exports:[
    HeaderComponent
  ]
})
export class CoreModule { }
