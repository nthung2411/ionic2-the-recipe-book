import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { NgForm } from '@angular/forms/src/forms';
import { AuthService } from '../../services/auth';

/**
 * Generated class for the Signup page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }

  private onSignup(form: NgForm): void {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...',
    });
    loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
         console.log(data);
         loading.dismiss();
      })
      .catch(error => {
        const alert = this.alertCtrl.create({
           title: 'Signup failed',
           // tslint:disable-next-line:object-literal-sort-keys
           message: error.message,
           buttons: ['Ok'],
         });
         // tslint:disable-next-line:align
         alert.present();
         loading.dismiss();
      });
  }

}
