import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InformationComponent } from './information/information.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'information', component: InformationComponent, data: {animation: 'InformationPage'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
