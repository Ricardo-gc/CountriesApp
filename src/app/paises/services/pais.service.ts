import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/paises-interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  //private apiUrl: string = 'https://restcountries.com/v2';
  private apiUrl: string = 'https://restcountries.com/v3.1';

  get HttpParams(){
    return new HttpParams().set('fields', 'name,flags,population,capital,cca2');
  }
  constructor(private http: HttpClient) { }
  buscarPais(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/name/${ termino }`;    
    return this.http.get<Country[]>( url,{params: this.HttpParams} );
    //.pipe(catchError(  err => of([])))
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${ this.apiUrl }/capital/${ termino }`;   
    return this.http.get<Country[]>(url,{params: this.HttpParams} );
  }

  getPaisPorCodigo(id: string): Observable<Country>{
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `${ this.apiUrl }/alpha/${ id }`;   
    return this.http.get<Country>(url);
  }
  
  getPaisesRegion(region:string): Observable<Country[]>{
    //https://restcountries.com/v2/regionalbloc/{regionalbloc}
    const url = `${ this.apiUrl }/region/${ region }`;
    //?fields=name,capilal,alpha2code,flag,population
    return this.http.get<Country[]>(url,{params: this.HttpParams} );
  }

}
