import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomepagePage } from '../homepage/homepage';

/**
 * Generated class for the SignupuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signupuser',
  templateUrl: 'signupuser.html',
})
export class SignupuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupuserPage');
  }
  keuserhome(){
    this.navCtrl.push(HomepagePage);
  }
}
