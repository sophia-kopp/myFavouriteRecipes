import {Component, inject, input, InputSignal} from '@angular/core';
import {Card} from '../../shared/card/card';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import {FavouriteButton} from '../../shared/favourite-button/favourite-button';
import {RecipeService} from '../recipe.service';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-recipes-detail-card',
  imports: [
    Card,
    MatIcon,
    FavouriteButton,
    MatFabButton
  ],
  templateUrl: './recipes-detail-card.html',
  styleUrl: './recipes-detail-card.css'
})
export class RecipesDetailCard {

  recipe:InputSignal<Recipe|undefined> = input();

  detailView = input(false)

  private router = inject(Router);
  private recipeService = inject(RecipeService);

  goToDetailPage(id?: string) {
    this.router.navigate(['/recipe', id]);
  }

  deleteRecipe(id:string | undefined) {
    this.recipeService.deleteRecipe(id ?? '');
  }
}
