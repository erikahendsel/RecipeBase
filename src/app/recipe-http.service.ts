import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment'
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeHttpService {
  recipeList: any = [];
  errorMessage: any;
  loading = false;
  displayRecipeDetails = false;
  singleRecipeDetails: any;

  onchangeInput: string;
  savedInput: string = 'top';

  constructor(private http: HttpClient) { }

  getRecipes(query: string) {
    return this.http.get(`https://api.edamam.com/search?q=${query}&app_id=${environment.APP_ID}&app_key=${environment.APP_KEY}`);
  }

  formatNumber(num: any) {
    return (Math.round(num*100)/100).toFixed(0); 
  }
  
  fetchRecipes() {
    this.loading = true;
    this.getRecipes(this.savedInput)
    .pipe(
      finalize(() => this.loading = false)
      )
    .subscribe(
      success => {
        this.recipeList = success;
        console.log('success:', success, 'value of recipeList: ' + this.recipeList.q);
      },
      error =>{
        this.errorMessage = error;
        console.log('error:', typeof this.errorMessage , this.errorMessage);
      },
    );
  }

}
