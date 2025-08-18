import { Routes } from '@angular/router';
import {RecipesList} from './receipts/recipes-list/recipes-list';
import {RecipeDetailsPage} from './receipts/recipe-details-page/recipe-details-page';

export const routes: Routes = [{
  path: '',
  component: RecipesList
},
  {
    path: 'recipe/:id',
    component: RecipeDetailsPage
  }];
