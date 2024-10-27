import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TousdetailsComponent } from './tousdetails/tousdetails.component';
import { PiesComponent } from './pies/pies.component';
import { CheesecakesComponent } from './cheesecakes/cheesecakes.component';

const routes: Routes = [
  { path: '', component: BodyComponent }, 
  { path: 'promotions', component: PromotionsComponent },
  { path: 'details', component: TousdetailsComponent },
  { path: 'pies', component: PiesComponent }, 
  { path: 'cheesecakes', component: CheesecakesComponent }, 
  { path: '**', redirectTo: '', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
