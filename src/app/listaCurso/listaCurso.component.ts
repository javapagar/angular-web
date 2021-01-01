import { Component } from '@angular/core';

@Component({
    selector : "app-lista",
    templateUrl : "./listaCurso.component.html"
})
export class ListaCursoComponent{

    listaCurso : string [] =["Typescript", "Javascript", "Java", "Python"];
    habilitar : boolean = true;
    buttonLabel : string ="Ocultar";

    setHabilitar() : void {
        this.habilitar = this.habilitar ? false:true;
        this.buttonLabel = this.habilitar ? "Ocultar" : "Mostrar";
    }
}