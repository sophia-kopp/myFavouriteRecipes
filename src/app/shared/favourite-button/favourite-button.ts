import {Component, inject, input, InputSignal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RecipeService} from '../../receipts/recipe.service';
import {MatFabButton} from '@angular/material/button';

@Component({
  selector: 'app-favourite-button',
  imports: [MatIcon, MatFabButton],
  templateUrl: './favourite-button.html',
  styleUrl: './favourite-button.css'
})
export class FavouriteButton {

  recipeId = input('');

  private recipeService = inject(RecipeService);

  addToFavourites() {
    this.recipeService.updateFavouriteState(this.recipeId());
  }
}
