import { ElementRef, Injectable, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../src/environments/environment'
import { finalize } from 'rxjs/operators';
import { gsap } from 'gsap';

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
  elementFromChild:any;

  constructor(private http: HttpClient) { }

  getRecipes(query: string) {
    return this.http.get(`https://api.edamam.com/search?q=${query}&app_id=${environment.APP_ID}&app_key=${environment.APP_KEY}`);
  }

  formatNumber(num: any) {
    return (Math.round(num*100)/100).toFixed(0); 
  }
  
  randomfunc() {
    this.loading = true;
    this.getRecipes(this.savedInput)
    .pipe(
      finalize(() => this.loading = false)
      )
    .subscribe(
      success => {
        this.recipeList = success;
        console.log('success:', success);
        this.randomFunction();
      },
      error =>{
        this.errorMessage = error;
        console.log('error:', typeof this.errorMessage , this.errorMessage);
      },
    );
  }
  randomFunction() {
    gsap.from(this.elementFromChild.nativeElement, {
      delay: .1,
      duration: 0.4,
      opacity: 0,
      y: -20,
      stagger: 0.15,
    });
    console.log(this.elementFromChild)
  }

}
