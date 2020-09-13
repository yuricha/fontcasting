import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicerecetService {

  // Define API
  apiURL = "https://api.spoonacular.com/recipes/complexSearch?";

  constructor(private httpClient: HttpClient) {

   }
    getReceta(nameReceta?: string, calories?: string, numrecetas?: string){
      return this.httpClient.get(this.apiURL+"query="+nameReceta+"&maxCalories="+calories+"&number="+numrecetas+"&apiKey=3889ffdd831248438ba374d279d24de5")
    }
}
