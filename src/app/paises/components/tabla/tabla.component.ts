import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent {
  @Input() paises: Country[] = [];
  constructor(PaisService:PaisService){}
}
