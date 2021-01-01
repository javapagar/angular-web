import { Cliente } from './cliente';
import { Injectable } from "@angular/core";
import { CLIENTES } from './cliente.json';

@Injectable()
export class ClienteService{

    getCliente():Cliente[]{
        return CLIENTES;
    }
}