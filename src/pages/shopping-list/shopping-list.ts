import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../services/shopping-list';
import { Ingredient } from '../../models/ingredient';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {
  listItems: Ingredient[];

  constructor(private shoppingListService: ShoppingListService) { }

  onAddItem(form: NgForm): void {
    this.shoppingListService.addItem(new Ingredient(form.value.ingredientName, form.value.amount));

    form.reset();

    this.loadItems();
  }

  ionViewWillEnter(): void {
    this.loadItems();
  }

  private loadItems(): void {
    this.listItems = this.shoppingListService.getItems();
  }

  private removeItemByIndex(index: number): void {
    this.shoppingListService.removeItemByIndex(index);
    this.loadItems();
  }
}
