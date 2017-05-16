import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { TabsPage } from '../pages/tabs/tabs';
import { SigninPage } from '../pages/signin/signin';
import { SignupPage } from '../pages/signup/signup';
import { Recipes } from '../pages/recipes/recipes';
import firebase from 'firebase';

@Component({
  templateUrl: 'app.html',
})
export class MyApp {
  rootPage: any = TabsPage;
  @ViewChild('nav') nav: NavController;
  recipesPage: any = Recipes;
  signinPage: any = SigninPage;
  signupPage: any = SignupPage;
  isAuthenticated = false;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    firebase.initializeApp({
      apiKey: 'AIzaSyA1jkgJvujmol54Wlz6HWe2-xfdBecJZUU',
      authDomain: 'fir-login-9a00a.firebaseapp.com',
    });
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated = true;
          this.nav.setRoot(this.rootPage);
        } else {
          this.isAuthenticated = false;
          this.nav.setRoot(this.signinPage);
        }
      }
    );
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  private onLoad(page: any): void {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  private onLogout(): void {
    console.log('log out');
  }
}
