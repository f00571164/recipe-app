import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes = [];

  constructor(private recipeService: RecipeService) {
    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }
}
