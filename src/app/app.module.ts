import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { SearchComponent } from './search/search.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    InformationComponent,
    LoadingIndicatorComponent,
    RecipeDetailsComponent,
    SearchComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
