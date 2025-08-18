import {Component, inject} from '@angular/core';
import {RecipeService} from '../recipe.service';
import {RecipesDetailCard} from '../recipes-detail-card/recipes-detail-card';
import {MatDialog} from '@angular/material/dialog';
import {NewRecipeDialog} from '../new-recipe-dialog/new-recipe-dialog';

@Component({
  selector: 'app-recipes',
  imports: [
    RecipesDetailCard
  ],
  templateUrl: './recipes-list.html',
  styleUrl: './recipes-list.css'
})
export class RecipesList {

  recipeService = inject(RecipeService);
  recipes: Recipe[] = this.recipeService.getAllRecipes();
  protected dialog = inject(MatDialog);

  openNewRecipeDialog() {
    this.dialog.open(NewRecipeDialog);
  }
}
