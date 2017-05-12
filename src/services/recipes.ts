import { Recipe } from "../models/recipe";
import { Ingredient } from "../models/ingredient";

export class RecipesService {
    private recipes: Recipe[]=[];

    addRecipe(title: string,
              description: string,
              difficulty: string,
              ingredients: Ingredient[]){
        this.recipes.push(new Recipe(title,description,difficulty,ingredients));
    }

    getRecipes(){
        return this.recipes.slice();
    }

    editRecipe(title: string,
               description: string,
               difficulty: string,
               ingredients: Ingredient[],
               index: number){
        this.recipes[index] = new Recipe(title,description,difficulty,ingredients);
    }

    removeRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipes = this.getRecipes();
    }
}