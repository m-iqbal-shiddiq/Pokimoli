import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { Data } from '../../provider/data';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public data: Data) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  signOut(){
    let confirm = this.alertCtrl.create({
      title: 'Sign Out?',
      message: 'any job that have not uploaded to the server will not be saved?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Sign Out',
          handler: () => {
            console.log('Agree clicked');
            this.data.logout();  //hapus storage cache local  
            this.navCtrl.setRoot(WelcomePage);
          }
        }
      ]
    });
    confirm.present();
  }

}
