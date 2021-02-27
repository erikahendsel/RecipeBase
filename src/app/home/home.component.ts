import { Component, OnInit} from '@angular/core';
import { RecipeHttpService } from '../recipe-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor(public _http: RecipeHttpService) { }

  ngOnInit(): void {
    this._http.randomfunc();
  }

  openRecipeDetails(rndRecipe: any) {
    this._http.displayRecipeDetails = true;
    document.querySelector('body').style.overflowY = 'hidden';
    this._http.singleRecipeDetails = rndRecipe;
  }

}
