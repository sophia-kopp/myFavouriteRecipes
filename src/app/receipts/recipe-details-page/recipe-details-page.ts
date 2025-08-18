import {Component, inject, input} from '@angular/core';
import {RecipesDetailCard} from '../recipes-detail-card/recipes-detail-card';
import {Router} from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-details-page',
  imports: [
    RecipesDetailCard
  ],
  templateUrl: './recipe-details-page.html',
  styleUrl: './recipe-details-page.css'
})
export class RecipeDetailsPage {

  private router = inject(Router)
  private recipeService = inject(RecipeService);

  private recipeID = this.router.url.split('/')[2];
  recipe = this.recipeService.getRecipeById(this.recipeID);

}
