import { Component, OnChanges, Input, HostBinding, SimpleChanges} from '@angular/core';
import { RecipeHttpService } from '../recipe-http.service';
import { trigger, transition, animate, style, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('.search-field', [
          style({opacity: 0}),
          animate('400ms', style({ opacity: 1 }))
        ])
      ])
    ]),
    trigger('recipeAnimationTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
    trigger('popUpAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('200ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})

export class HomeComponent implements OnChanges {
  @Input() valueOfRecipeListQKeyword: string;
  @HostBinding('@pageAnimations')
  public animatePage = true;
  
  constructor(public _http: RecipeHttpService) {}

  //Here we make sure that valueOfRecipeListQKeywords gets this._http.recipeList.q value. If changes have not been made to _http_recipeList.q then valueOfRecipeListQKeywords will keep the original value.
  ngOnInit() {
    this.valueOfRecipeListQKeyword = this._http.recipeList.q;
    if(this.valueOfRecipeListQKeyword === undefined) {
      //Only runs once on page load, since at the very beginning the valueOfRecipeListQKeyword is undefined.
      this._http.fetchRecipes();
    }
  }

  //Runs after it sees changes in this.valueOfRecipeListQKeyword. So if we change the router then fetchRecipes() function will not run.
  ngOnChanges(changes: SimpleChanges) {
    if(changes.currentValue !== changes.previousValue) {
      this._http.fetchRecipes();
    }
  }

  openRecipeDetails(rndRecipe: any) {
    this._http.displayRecipeDetails = true;
    document.querySelector('html').style.overflowY = 'hidden';
    this._http.singleRecipeDetails = rndRecipe;
  }

}
