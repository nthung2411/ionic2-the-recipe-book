import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from '../../services/auth';
import { NgForm } from '@angular/forms/src/forms';

/**
 * Generated class for the Signin page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) { }
  onSignin(form: NgForm): void {
    const loading = this.loadingCtrl.create({
      content: 'Signing you up...',
    });
    loading.present();
    this.authService.signin(form.value.email, form.value.password)
      .then(data => {
         loading.dismiss();
      })
      .catch(error => {
        const alert = this.alertCtrl.create({
           title: 'Signin failed',
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
