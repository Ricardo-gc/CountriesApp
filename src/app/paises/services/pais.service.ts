import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/paises-interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //private apiUrl: string = 'https://restcountries.com/v2';
  private apiUrl: string = 'https://restcountries.com/v3.1';
  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;    
    return this.http.get<Country[]>( url );
    //.pipe(catchError(  err => of([])))
  }
  
}