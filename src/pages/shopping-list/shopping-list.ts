import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { ShoppingListService } from "../../services/shopping-list";
import { Ingredient } from "../../models/ingredient";

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingList {
  constructor(private shoppingListService: ShoppingListService){

  }

 onAddItem(form: NgForm){
  var name= form.controls.ingredientName.value;
  var amount= form.controls.amount.value;
  var ingredient = new Ingredient(name,amount);
  this.shoppingListService.addItem(ingredient);
  console.log(this.shoppingListService.getItems());
 }
}
