import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
import { EditprofilePage } from '../editprofile/editprofile';


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
  id_user: any;
  nama_user: any;
  no_hp: any;
  email_user: any;

  userData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private data: Data,
    public http: Http) {

      this.data.getData().then((data) =>
    {
      console.log(data);
      this.userData = data;
      this.id_user = data.id_user;
      this.email_user = data.email_user;
      this.nama_user = data.nama_user;
      this.no_hp = data.no_hp;
    })
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  gotoEdit(){
    this.navCtrl.push(EditprofilePage, this.userData);
  }

  gotoHome(){
    this.navCtrl.push(HomePage);
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
