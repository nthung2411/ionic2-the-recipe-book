import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit-recipe',
  templateUrl: 'edit-recipe.html',
})
export class EditRecipe implements OnInit {
    ngOnInit(): void {
      
    }

  mode = 'New';

  constructor(private navParams: NavParams) {
  }

}
