import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-form-cliente',
    templateUrl: './formCliente.component.html',

})

export class FormClienteComponent implements OnInit {

    public cliente: Cliente = new Cliente();
    public titulo: string = "Crear cliente";
    
    constructor(private clienteService : ClienteService,
        private router: Router) { }

    ngOnInit(): void { }

    public create(): void{
        this.clienteService.create(this.cliente).subscribe(
            response =>{
                 this.router.navigate(['/clientes']);
                 Swal.fire(
                     'Creación de usuario',
                     `El usuario ${this.cliente.nombre} ha sido creado con éxito!`,
                     'success'
                 )
            }
        );
    }
}
