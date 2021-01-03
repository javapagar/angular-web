import { ClienteService } from './cliente.service';
import { Cliente } from './cliente';
import { Component, OnInit } from '@angular/core';

@Component({
    selector : 'app-clientes',
    templateUrl : './cliente.component.html'
})
export class ClienteComponent implements OnInit{

    clientes : Cliente [];
    
    constructor(private clienteService : ClienteService){}

    ngOnInit(){
        this.clienteService.getClientes().subscribe(
            clientes => this.clientes = clientes
        )
        
    }
}