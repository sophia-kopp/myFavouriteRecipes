import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-new-recipe-dialog',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './new-recipe-dialog.html',
  styleUrl: './new-recipe-dialog.css'
})
export class NewRecipeDialog {

  recipeService = inject(RecipeService);

  newRecipeForm = new FormGroup({
    title: new FormControl(''),
    ingredients: new FormControl(['']),
    preparation: new FormControl(''),
  });

  onSubmitNewRecipe() {
    const newRecipe: Recipe= {
      id: this.generateNewId().toString(),
      title: this.newRecipeForm.value.title ?? '',
      ingredients: this.newRecipeForm.value.ingredients ?? [],
      preparation: this.newRecipeForm.value.preparation ?? '',
      favourite: false,
      comments:''
    }
    this.recipeService.createNewRecipe(newRecipe);
  }

  onCancel(){}

  generateNewId(){
    return this.recipeService.getAllRecipes().length +1;
  }
}


