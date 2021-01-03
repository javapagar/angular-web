import { Cliente } from './cliente';
import { Injectable } from "@angular/core";
import { CLIENTES } from './cliente.json';
import { of, Observable } from 'rxjs';


@Injectable()
export class ClienteService{

    getClientes(): Observable <Cliente[]>{
        return of (CLIENTES);
    }
}