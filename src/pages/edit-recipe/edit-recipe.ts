import { Component, OnInit } from '@angular/core';
import {
  IonicPage,
  NavParams,
  ActionSheetController,
  AlertController,
  ToastController, NavController
} from 'ionic-angular';
import { FormGroup } from '@angular/forms/';
import { FormControl, Validators, FormArray } from '@angular/forms/';
import { RecipesService } from '../../services/recipes';
import { Recipe } from '../../models/recipe';

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipe implements OnInit {
  mode = 'New';
  selectOptions = ['Easy', 'Medium', 'Hard'];
  recipeForm: FormGroup;
  recipe: Recipe;
  index: number;

  constructor(private navParams: NavParams,
    private actionSheetCtrl: ActionSheetController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private recipesService: RecipesService,
    private navCtrl: NavController) { }

  ngOnInit(): void {
    this.mode = this.navParams.get('mode');
    if (this.mode === 'Edit') {
      this.recipe = this.navParams.get('recipe');
      this.index = this.navParams.get('index');
    }
    this.initializeForm();
  }

  private initializeForm() {
    let title = null;
    let description = null;
    let difficulty = 'Medium';
    let ingredients = [];
    if (this.mode === 'Edit') {
      title = this.recipe.title;
      description = this.recipe.description;
      difficulty = this.recipe.difficulty;
      for (let ingredient of this.recipe.ingredients) {
        ingredients.push(new FormControl(ingredient.name, Validators.required));
      }
    }
    this.recipeForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'description': new FormControl(description, Validators.required),
      'difficulty': new FormControl(difficulty),
      'ingredients': new FormArray(ingredients)
    });
  }

  onSubmit() {
    const values = this.recipeForm.value;
    let ingredients = [];
    if (values.ingredients.length > 0) {
      ingredients = values.ingredients.map(name => {
        return { name: name, amount: 1 }
      });
    }
    if (this.mode === 'Edit') {
      this.recipesService.editRecipe(values.title, values.description, values.difficulty, ingredients, this.index);
    }
    else {
      this.recipesService.addRecipe(values.title, values.description, values.difficulty, ingredients);
    }
    this.navCtrl.popToRoot();
  }

  private createNewIngredientAlert() {
    return this.alertCtrl.create({
      title: 'Add Ingredient',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Add',
          handler: (data) => {
            if (data.name.trim() === '' || data.name === null) {
              const toast = this.toastCtrl.create({
                message: 'Please enter a valid value!',
                duration: 1000,
                position: 'bottom' //default is bottom
              });
              toast.present();
              return;
            }
            (<FormArray>this.recipeForm.get('ingredients')).push(
              new FormControl(
                data.name,
                Validators.required
              ));
            const toast = this.toastCtrl.create({
              message: 'new ingredient added!',
              duration: 1000,
              position: 'bottom' //default is bottom
            });
            toast.present();
          }
        }
      ]
    });
  }

  onManageIngredients() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'What do you want to do ?',
      buttons: [
        {
          text: 'Add Ingredient',
          handler: () => {
            this.createNewIngredientAlert().present();
          }
        },
        {
          text: 'Remove all Ingredients',
          role: 'destructive',
          handler: () => {
            const formArray: FormArray = <FormArray>this.recipeForm.get('ingredients');
            const length = formArray.length;
            if (length === 0) return;
            for (let index = length - 1; index >= 0; index--) {
              formArray.removeAt(index);
            }
            const toast = this.toastCtrl.create({
              message: 'all ingredients removed!',
              duration: 1000,
              position: 'top' //default is bottom
            });
            toast.present();
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('cancel');
          }
        },
      ]
    });
    actionSheet.present();
  }
}
