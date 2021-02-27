import { Component, OnInit } from '@angular/core';
import { RecipeHttpService } from '../recipe-http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(public _http: RecipeHttpService) { }

  ngOnInit(): void {
  }

  updateSearch(event: any) {
    console.log(event.target.value)
    this._http.onchangeInput = event.target.value;
  }

  fireSearch(event: any) {
    event.preventDefault();
    this._http.savedInput = this._http.onchangeInput;
    console.log(this._http.savedInput)
    this._http.randomfunc();
  }

}
