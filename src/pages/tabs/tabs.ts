import { Component } from '@angular/core';
import { ShoppingList } from '../shopping-list/shopping-list';
import { Recipes } from '../recipes/recipes';

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  shoppingListPage = ShoppingList;
  recipesPage = Recipes;
}
