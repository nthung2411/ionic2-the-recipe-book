import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SigninPage } from './signin';

@NgModule({
  declarations: [
    SigninPage,
  ],
  imports: [
    IonicPageModule.forChild(SigninPage),
  ],
  // tslint:disable-next-line:object-literal-sort-keys
  exports: [
    SigninPage,
  ],
})
export class SigninModule {}
