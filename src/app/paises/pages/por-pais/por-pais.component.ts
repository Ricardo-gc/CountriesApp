import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
  termino: string = '';
  errorExists: boolean = false;
  paises: Country[] = [];
  //private apiUrl: string = 'https://restcountries.eu/rest/v2';
  private apiUrl: string = 'https://restcountries.com/v2';

  buscar(){    
    this.errorExists= false;
    this.paisService.buscarPais(this.termino)
    .subscribe(paises => {
      console.log(paises);
      this.paises = [...paises];
    },(err) => {
      this.errorExists = true;
      this.paises = [];
    });
  }
  constructor(private paisService: PaisService){}
}
