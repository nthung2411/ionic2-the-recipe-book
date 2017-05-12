import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ShoppingList } from "../pages/shopping-list/shopping-list";
import { Recipes } from "../pages/recipes/recipes";
import { Recipe } from "../pages/recipe/recipe";
import { EditRecipe } from "../pages/edit-recipe/edit-recipe";
import { TabsPage } from "../pages/tabs/tabs";
import { ShoppingListService } from "../services/shopping-list";
import { RecipesService } from "../services/recipes";

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    ShoppingList,
    Recipes,
    Recipe,
    EditRecipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    ShoppingList,
    Recipes,
    Recipe,
    EditRecipe
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ShoppingListService,
    RecipesService
  ]
})
export class AppModule {}
