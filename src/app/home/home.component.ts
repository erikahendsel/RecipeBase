import { Component, ElementRef, OnInit, ViewChild, OnChanges, Input, SimpleChange, HostBinding} from '@angular/core';
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
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('300ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
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
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})

export class HomeComponent implements OnInit {
  @HostBinding('@pageAnimations')
  // @HostBinding('@recipeAnimationTrigger')
  @ViewChild('recipeCard', {static: true}) recipeCard: ElementRef<HTMLDivElement>;

  constructor(public _http: RecipeHttpService) {}

  ngOnInit() {
    this._http.randomfunc();
  }

  openRecipeDetails(rndRecipe: any) {
    this._http.displayRecipeDetails = true;
    document.querySelector('html').style.overflowY = 'hidden';
    this._http.singleRecipeDetails = rndRecipe;
  }

}
