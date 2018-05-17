import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomepawangPage } from '../homepawang/homepawang';

/**
 * Generated class for the LoginpawangPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginpawang',
  templateUrl: 'loginpawang.html',
})
export class LoginpawangPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginpawangPage');
  }
  kepawanghome(){
    this.navCtrl.push(HomepawangPage);
  }

}
