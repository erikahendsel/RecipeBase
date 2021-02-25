import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {
  exampleReq:string= `https://api.edamam.com/search?q=chicken&app_id=${environment.APP_ID}&app_key=${environment.APP_KEY}`

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http.get(this.exampleReq);
  }
}
