import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {
  termino: string = '';
  errorExists: boolean = false;
  mostrarSugerencias: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  //private apiUrl: string = 'https://restcountries.eu/rest/v2';
  private apiUrl: string = 'https://restcountries.com/v2';

  buscar(termino: string){
    this.mostrarSugerencias = false;
    this.errorExists= false;
    this.termino = termino;
    this.paisService.buscarPais(this.termino)
    .subscribe(paises => {
      console.log(paises);
      this.paises = [...paises];
    },(err) => {
      this.errorExists = true;
      this.paises = [];
    });
  }

  sugerencias(termino: string){
    this.errorExists = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    this.paisService.buscarPais(termino)
      .subscribe(paises => this.paisesSugeridos= paises.splice(0,5),
      (err) => this.paisesSugeridos = []);
    }
    
  buscarSugerido(termino: string){
    this.buscar(termino);
  }

  constructor(private paisService: PaisService){}

}
