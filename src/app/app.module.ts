import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//componentes de la app
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {ListaCursoComponent} from './ListaCurso/listaCurso.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteService } from './cliente/cliente.service';
import { FormClienteComponent } from './cliente/formCliente.component';

import { RouterModule, Routes } from '@angular/router';//implementa la navegación entre páginas SPA
import { HttpClientModule } from '@angular/common/http'//implementa la llamada a rest
import { FormsModule } from '@angular/forms'; //implementa el manejo de formularios

//navegación entre páginas
const routes: Routes = [
  { path: '', redirectTo: '/clientes', pathMatch: 'full'},
  { path: 'cursos', component: ListaCursoComponent },
  { path: 'clientes', component: ClienteComponent },
  { path: 'clientes/form', component: FormClienteComponent },
  { path: 'clientes/form/:id', component: FormClienteComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListaCursoComponent,
    ClienteComponent,
    FormClienteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//implementa la llamada a rest
    FormsModule,//implementa el manejo de formularios
    RouterModule.forRoot(routes)//implementa la navegación entre páginas SPA
  ],
  providers: [ClienteService],//servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
