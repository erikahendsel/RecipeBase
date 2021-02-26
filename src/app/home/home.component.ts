import { Component, OnInit} from '@angular/core';
import { RecipeHttpService } from '../recipe-http.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  recipes: any = [];
  errorMessage: any;
  loading = false;
  displayRecipeDetails = false;
  recipeTitle: any;
  recipeFinalArray: Array<string> = [];

  constructor(private _http: RecipeHttpService) { }

  ngOnInit(): void {
      // this._http.getRecipes().subscribe(
      //   data => {
      //   this.recipes = data;
      //   console.log(this.recipes)
      // } )
    this.loading = true;
    this._http.getRecipes()
    .pipe(
      finalize(() => this.loading = false)
      )
    .subscribe(
      success => {
        this.recipes = success;
        console.log('success:', success);
      },
      error =>{
        this.errorMessage = error;
        console.log('error:', typeof this.errorMessage , this.errorMessage);
      },
    );
  }

  formatNumber(num: any) {
    return (Math.round(num*100)/100).toFixed(0); 
  }

  openRecipeDetails(event: any, recipeLabel: any, recipeArray: any, rndRecipe: any) {
    this.displayRecipeDetails = true;
    document.querySelector('body').style.overflowY = 'hidden';
    this.recipeTitle = rndRecipe;
  }

  closeRecipeDetails(event: any) {
    document.querySelector('body').style.overflowY = 'visible';
    // this.displayRecipeDetails = false;
    const classNames = event.target.className;
    if(classNames === 'close-btn' ||classNames === 'popover-shadow') {
      this.displayRecipeDetails = false;
    }
  }

}
