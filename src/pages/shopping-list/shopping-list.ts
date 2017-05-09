import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {
  listItems: Ingredient[];

  constructor(private shoppingListService: ShoppingListService){  }

 onAddItem(form: NgForm){
  this.shoppingListService.addItem(new Ingredient(form.value.ingredientName,form.value.amount));

  form.reset();

  this.loadItems();
 }

 ionViewWillEnter(){
   this.loadItems();
 }

 private loadItems(){
   this.listItems = this.shoppingListService.getItems();
 }
 
 removeItemByIndex(index: number){
   this.shoppingListService.removeItemByIndex(index);
   this.loadItems();
 }
}
