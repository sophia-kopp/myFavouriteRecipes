import {inject, Injectable} from "@angular/core";

let recipes: Recipe[] = [{
  id: "1",
  title: 'name 1',
  ingredients: [''],
  preparation: '',
  favourite: false,
  comments: '',
}, {
  id: "2",
  title: 'name 2',
  ingredients: [''],
  preparation: '',
  favourite: false,
  comments: '',
}, {
  id: "3",
  title: 'name 3',
  ingredients: [''],
  preparation: '',
  favourite: false,
  comments: '',
}, {
  id: "4",
  title: 'name 4',
  ingredients: [''],
  preparation: '',
  favourite: false,
  comments: '',
}]

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  getAllRecipes() {
    return recipes;
  }

  getRecipeById(id: string) {
    return recipes.filter(recipe => recipe.id === id)[0];
  }

  createNewRecipe(recipe: Recipe) {
    recipes.push(recipe);
  }

  updateRecipe(id: string, newRecipe: Recipe | undefined) {
    const selectedRecipeIndex: number = recipes.findIndex(recipe => recipe.id === id);
  }

  deleteRecipe(id: string) {
    const selectedRecipeIndex: number = recipes.findIndex(recipe => recipe.id === id);
    recipes.splice(selectedRecipeIndex, 1);
  }

  updateFavouriteState(id: string) {
    //const favouriteRecipe= this.getRecipeById(id);
    //favouriteRecipe?.favourite == true ? favouriteRecipe.favourite = false : true;
   recipes.filter(recipe => recipe.id !== id)[0].favourite == true ? false : true;
    console.log("favourite: ", id, "state: ", recipes.filter(recipe => recipe.id !== id)[0].favourite);
  }
}
