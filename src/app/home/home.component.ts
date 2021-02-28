import { Component, ElementRef, OnInit, ViewChild, OnChanges, Input, SimpleChange} from '@angular/core';
import { RecipeHttpService } from '../recipe-http.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnChanges {
  @ViewChild('recipeCard', {static: true}) recipeCard: ElementRef<HTMLDivElement>;


  constructor(public _http: RecipeHttpService) {}

  ngOnInit() {
    this._http.elementFromChild = this.recipeCard
    this._http.randomfunc();
  }
  ngOnChanges() {

  }

  openRecipeDetails(rndRecipe: any) {
    this._http.displayRecipeDetails = true;
    document.querySelector('body').style.overflowY = 'hidden';
    this._http.singleRecipeDetails = rndRecipe;
  }

  initAnimationsRecipeCard() {
    gsap.from(this.recipeCard.nativeElement, {
      delay: .5,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
  }
}
