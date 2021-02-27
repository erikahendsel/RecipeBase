import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {
  constructor(private http: HttpClient) { }

  getRecipes(query: string) {
    return this.http.get(`https://api.edamam.com/search?q=${query}&app_id=${environment.APP_ID}&app_key=${environment.APP_KEY}`);
  }
}
