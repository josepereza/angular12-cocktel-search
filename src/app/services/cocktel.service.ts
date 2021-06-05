import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktelService {
  

  constructor(private http:HttpClient) { }
  getAll(){
    
      return this.http.get('https://www.thecocktaildb.com/api/json/v2/1/filter.php?g=Cocktail_glass')
  }
  getCategorias(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v2/1/list.php?c=list')
  }
  getListadoCategoria(categoria:any){
    console.log('mi cagetoria :',categoria)
   return  this.http.get<any[]>(`https://www.thecocktaildb.com/api/json/v2/1/filter.php?c=${categoria}`)

  }
  getDetail(id:any){
    return this.http.get(`https://www.thecocktaildb.com/api/json/v2/1/lookup.php?i=${id}`)

  }
}
