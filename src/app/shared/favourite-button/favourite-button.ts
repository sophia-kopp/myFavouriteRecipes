import {Component, inject, input, InputSignal, signal} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {RecipeService} from '../../receipts/recipe.service';
import {MatFabButton} from '@angular/material/button';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-favourite-button',
  imports: [MatIcon, MatFabButton, NgClass],
  templateUrl: './favourite-button.html',
  styleUrl: './favourite-button.css'
})
export class FavouriteButton {

  recipeId = input('');
  active = signal(false);

  private recipeService = inject(RecipeService);

  addToFavourites() {
    this.active() == true ? this.active.set(false) : this.active.set(true);
    this.recipeService.getRecipeById(this.recipeId()).favourite == true ? this.active.set(false) : this.active.set(true);
    this.recipeService.updateFavouriteState(this.recipeId());
  }
}
