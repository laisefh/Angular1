import { AppRooutingModule } from './../app-routing.module';
import { NovoComponenteComponent } from './../paginas/novo-componente/novo-componente.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ],
  imports: [
    CommonModule,
    AppRooutingModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
