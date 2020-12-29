import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = 'Bienvenido a Angular!';
  curso : string = 'Front en Angular y Back en Spring';
  profesor : string = 'Andrés Guzmán'
}
