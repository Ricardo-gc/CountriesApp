import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
      margin-top: 5px
    }
  `
  ]
})
export class PorRegionComponent{
  //regiones: string[] = ['EU', 'EFTA', 'CARICOM', 'PA', 'AU','USAN','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC'];
  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  paises: Country[] = [];
  regionActiva: string = '';
  constructor(private PaisService: PaisService) { }

  getClaseCSS(region: string): string{
    return (region === this.regionActiva)? 'btn btn-primary': 'btn btn-outline-primary'
  }
  activarRegion(region : string){
    if (region === this.regionActiva){return;}
    this.regionActiva = region;
    this.paises = [];
    //TODO: Hacer el llamado al servicio
    this.PaisService.getPaisesRegion(this.regionActiva)
    .subscribe(paises => this.paises = paises);
  }
}
