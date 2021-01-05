import { Cliente } from './cliente';
import { Injectable } from "@angular/core";
import { CLIENTES } from './cliente.json';
import { of, Observable } from 'rxjs';
//para llamar al REST
import { HttpClient, HttpHeaders } from '@angular/common/http'
//para el pipe
import { map } from 'rxjs/operators'

@Injectable()
export class ClienteService{
    private urlEndpoint : string = 'http://localhost:8080/api/clientes';
    
    private httpHeaders : HttpHeaders = new HttpHeaders({'content-type' : 'application/json'});

    constructor( private httpClient : HttpClient){}

    getClientes(): Observable <Cliente[]>{
        //return of (CLIENTES);
        return this.httpClient.get(this.urlEndpoint).pipe(
            map(jsonResponse => jsonResponse as Cliente[])
        );
    }

    create(cliente : Cliente) : Observable<Cliente>{
        return this.httpClient.post<Cliente>(this.urlEndpoint, cliente, { headers: this.httpHeaders})
    }
}