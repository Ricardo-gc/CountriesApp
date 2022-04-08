import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent {
  termino: string = '';
  errorExists: boolean = false;
  paises: Country[] = [];
  //private apiUrl: string = 'https://restcountries.eu/rest/v2';
  private apiUrl: string = 'https://restcountries.com/v2';

  buscar(termino: string){    
    this.errorExists= false;
    this.termino = termino;
    this.paisService.buscarCapital(this.termino)
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
