import {Component, inject, input, InputSignal} from '@angular/core';
import {Card} from '../../shared/card/card';
import {MatIcon} from '@angular/material/icon';
import {Router} from '@angular/router';
import {FavouriteButton} from '../../shared/favourite-button/favourite-button';
import {RecipeService} from '../recipe.service';
import {MatFabButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {NewRecipeDialog} from '../new-recipe-dialog/new-recipe-dialog';
import {AddComment} from '../add-comment/add-comment';

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

  protected recipeDialog = inject(MatDialog);
  protected commentDialog = inject(MatDialog);

  goToDetailPage(id?: string) {
    this.router.navigate(['/recipe', id]);
  }

  deleteRecipe(id:string | undefined) {
    this.recipeService.deleteRecipe(id ?? '');
    this.router.navigate(['']);
  }
  addComment(){
    this.commentDialog.open(AddComment);
  }
  goToEditRecipe(id?: string) {
    this.recipeDialog.open(NewRecipeDialog);
  }
}
