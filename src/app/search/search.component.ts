import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RecipeHttpService } from '../recipe-http.service';
import { gsap } from 'gsap';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @ViewChild('searchField', {static: true}) searchField: ElementRef<HTMLDivElement>
  constructor(public _http: RecipeHttpService) { }

  ngOnInit(): void {
    // this.initAnimations2()
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

  initAnimations2() {
    gsap.from(this.searchField.nativeElement, {
      delay: 0.2,
      duration: 0.4,
      opacity: 0,
      y: -20,
    });
  }

}
