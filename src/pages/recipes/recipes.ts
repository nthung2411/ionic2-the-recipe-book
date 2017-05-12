import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { EditRecipe } from "../edit-recipe/edit-recipe";
import { RecipesService } from "../../services/recipes";
import { Recipe } from "../../models/recipe";

@IonicPage()
@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class Recipes {

  private recipes: Recipe[];

  constructor(private navCtrl: NavController,
              private recipesService: RecipesService){

  }

  ionViewWillEnter(){
    this.recipes = this.recipesService.getRecipes();
  }

  onNewRecipe(){    
    this.navCtrl.push(EditRecipe, {mode: 'New'});
  }

  onLoadRecipe(recipe: Recipe){
    console.log('trigger load recipe');
  }
}
