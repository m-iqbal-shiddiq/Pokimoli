import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { HomepagePage } from '../homepage/homepage';
import { SignupuserPage } from '../signupuser/signupuser';

/**
 * Generated class for the LoginuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginuser',
  templateUrl: 'loginuser.html',
})
export class LoginuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginuserPage');
  }

 

  keuserhome(){
    this.navCtrl.push(HomepagePage);
  }
  keregister(){
    this.navCtrl.push(SignupuserPage);
  }
}
