import { Component, OnInit } from '@angular/core';
import { RecipeHttpService } from '../recipe-http.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss']
})
export class RecipeDetailsComponent implements OnInit {

  constructor(public _http: RecipeHttpService) { }

  ngOnInit(): void {
  }

  closeRecipeDetails(event: any) {
    const classNames = event.target.className;
    if(classNames === 'close-btn' || classNames === 'popover-shadow') {
      this._http.displayRecipeDetails = false;
      document.querySelector('body').style.overflowY = 'visible';
    }
  }

}
