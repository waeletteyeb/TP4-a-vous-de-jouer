import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  liked: boolean = false; 
  message: string = ''; 


  save() {
    this.liked = true; 
    this.message = "Merci d'avoir aimé nos produits!"; 
    localStorage.setItem("liked", "true"); 
  }
}
