import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Test2 } from './test2';

@NgModule({
  declarations: [
    Test2,
  ],
  imports: [
    IonicPageModule.forChild(Test2),
  ],
  exports: [
    Test2
  ]
})
export class Test2Module {}
