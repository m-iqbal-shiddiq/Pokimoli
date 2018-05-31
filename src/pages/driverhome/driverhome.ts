import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the DriverhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-driverhome',
  templateUrl: 'driverhome.html',
})
export class DriverhomePage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private data: Data,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverhomePage');
  }

  signOut(){
    let confirm = this.alertCtrl.create({
      title: 'Keluar',
      message: 'Anda yakin ingin keluar?',
      buttons: [
        {
          text: 'Tidak',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Ya',
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
