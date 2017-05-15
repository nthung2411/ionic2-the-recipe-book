import { Ingredient } from '../models/ingredient';

export class ShoppingListService {
    private ingredients: Ingredient[] = [];

    addItem(ingredient: Ingredient): void {
        if (this.getItem(ingredient.name) !== -1) { return; }
        this.ingredients.push(ingredient);
    }

    addItems(ingredients: Ingredient[]): void  {
        for (let index = 0; index < ingredients.length; index++) {
            let ingredient = ingredients[index];
            if (this.getItem(ingredient.name) !== -1) {continue; }
            this.ingredients.push(ingredient);
        }
        // add range of items into array (supported by typescript)
        // this.ingredients.push(...ingredients); 
    }

    removeItem(ingredient: Ingredient): void {
        let index = this.getItem(ingredient.name);
        this.ingredients.splice(index, 1);
    }

    removeItemByIndex(index: number): void {
        this.ingredients.splice(index, 1);
    }

    getItems(): Ingredient[] {
        return this.ingredients.slice(); // return replicated array, not original one.
    }

    getItem(name: string): number {
        let index = this.ingredients.findIndex((element) => {
            return name === element.name;
        });
        return index;
    }
}
