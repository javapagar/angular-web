import { ClienteService } from './cliente.service';
import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-form-cliente',
    templateUrl: './formCliente.component.html',

})

export class FormClienteComponent implements OnInit {

    public cliente: Cliente = new Cliente();
    public titulo: string;
    public btLabel: string;
    
    constructor(private clienteService : ClienteService,
        private router: Router,
        private activateRoute: ActivatedRoute) { }

    ngOnInit(): void { 
        this.cargarCliente();
    }

    //sirve tanto para crear como para editar
    public save(): void{
        this.clienteService.save(this.cliente).subscribe(
            response =>{
                let tipoMsg= 0;
                if (this.cliente.id) tipoMsg=1;
                 this.router.navigate(['/clientes']);
                 if (tipoMsg == 0){
                     Swal.fire(
                        'Creación de usuario',
                        `El usuario ${this.cliente.nombre} ha sido creado con éxito!`,
                        'success'
                 )}else{
                    Swal.fire(
                        'Edición de usuario',
                        `El usuario ${this.cliente.nombre} ha sido editado con éxito!`,
                        'success' 
                    )}
            }
        );
    }

    public cargarCliente(): void {
        this.activateRoute.params.subscribe(params =>{
            let idParam = params['id'];
            if(idParam) {
                this.clienteService.cargar(idParam).subscribe(cliente => this.cliente = cliente)
                this.titulo= "Editar cliente";
                this.btLabel="Editar";
            }else{
                this.titulo= "Crear cliente";
                this.btLabel="Crear";
            }
        })
    }
}
