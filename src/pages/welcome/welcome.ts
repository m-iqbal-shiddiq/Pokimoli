import { Component } from '@angular/core';
import { IonicPage, NavController, MenuController, NavParams } from 'ionic-angular';
import { UserPage } from '../user/user';
import { DriverPage } from '../driver/driver';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor(
    public navCtrl: NavController, 
    public menuCtrl: MenuController,
    public navParams: NavParams) {
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  gotouser(){
    this.navCtrl.push(UserPage);
  }
  gotodriver(){
    this.navCtrl.push(DriverPage);
  }

}
