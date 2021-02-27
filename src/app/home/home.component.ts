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
  singleRecipeDetails: any;

  onchangeInput: string;
  savedInput: string = 'top';


  constructor(private _http: RecipeHttpService) { }

  ngOnInit(): void {
    this.randomfunc();
  }

  randomfunc() {
    this.loading = true;
    this._http.getRecipes(this.savedInput)
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

  openRecipeDetails(rndRecipe: any) {
    this.displayRecipeDetails = true;
    document.querySelector('body').style.overflowY = 'hidden';
    this.singleRecipeDetails = rndRecipe;
  }

  closeRecipeDetails(event: any) {
    document.querySelector('body').style.overflowY = 'visible';
    // this.displayRecipeDetails = false;
    const classNames = event.target.className;
    if(classNames === 'close-btn' || classNames === 'popover-shadow') {
      this.displayRecipeDetails = false;
    }
  }

  updateSearch(event: any) {
    console.log(event.target.value)
    this.onchangeInput = event.target.value;
  }

  fireSearch(event: any) {
    event.preventDefault();
    this.savedInput = this.onchangeInput;
    console.log(this.savedInput)
    this.randomfunc()
  }
}
