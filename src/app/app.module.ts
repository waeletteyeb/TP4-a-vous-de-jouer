import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { TousdetailsComponent } from './tousdetails/tousdetails.component';
import { PiesComponent } from './pies/pies.component';
import { CheesecakesComponent } from './cheesecakes/cheesecakes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    PromotionsComponent,
    TousdetailsComponent,
    PiesComponent,
    CheesecakesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
