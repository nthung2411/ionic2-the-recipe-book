import { Ingredient } from "../models/ingredient";

export class ShoppingListService {
    private ingredients: Ingredient[] = [];

    addItem(ingredient: Ingredient){
        if(this.getItem(ingredient.name) !==-1) return;
        this.ingredients.push(ingredient);
    }

    addItems(ingredients: Ingredient[]) {
        for(var index = 0; index<ingredients.length;index++){
            var ingredient = ingredients[index];
            if(this.getItem(ingredient.name) !== -1) continue;
            this.ingredients.push(ingredient);
        }
        //this.ingredients.push(...ingredients); //add range of items into array (supported by typescript)
    }

    removeItem(ingredient: Ingredient){
        var index = this.getItem(ingredient.name);
        this.ingredients.splice(index, 1);
    }

    removeItemByIndex(index: number){
        this.ingredients.splice(index, 1);
    }

    getItems(){
        return this.ingredients.slice();//return replicated array, not original one.
    }

    getItem(name: string): number{
        var index = this.ingredients.findIndex((element) => {
            return name === element.name;
        });
        return index;
    }
}