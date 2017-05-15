import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Recipe } from '../../models/recipe';
import { EditRecipe } from '../edit-recipe/edit-recipe';
import { ShoppingListService } from '../../services/shopping-list';
import { RecipesService } from '../../services/recipes';

@IonicPage()
@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit {
  recipe: Recipe;
  index: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private shoppingListService: ShoppingListService,
              private recipesService: RecipesService,
              private toastCtrl: ToastController)  {
  }

  ngOnInit(): void {
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onEditRecipe(): void {
    this.navCtrl.push(EditRecipe, {mode: 'Edit', recipe: this.recipe, index: this.index});
  }

  onDeleteRecipe(): void {
    this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }

  onAddIngredientsToShoppingList(): void {
    this.shoppingListService.addItems(this.recipe.ingredients);
    const toast = this.toastCtrl.create({
      duration: 1000,
      message: 'Add ingredients to shopping list successfully!!',
      position: 'middle',
    });
    toast.present();
  }
}
