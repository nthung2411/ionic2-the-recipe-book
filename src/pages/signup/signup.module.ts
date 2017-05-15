import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignupPage } from './signup';

@NgModule({
  declarations: [
    SignupPage,
  ],
  imports: [
    IonicPageModule.forChild(SignupPage),
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  exports: [
    SignupPage,
  ],
})
export class SignupModule {}
