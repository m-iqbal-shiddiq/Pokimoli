import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, MenuController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { WelcomePage } from '../welcome/welcome';
import { Http } from '@angular/http';
import { KonfirmasiPesananPage } from '../konfirmasi-pesanan/konfirmasi-pesanan';

/**
 * Generated class for the DriverhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-driverhome',
  templateUrl: 'driverhome.html',
})
export class DriverhomePage {
  id_user: any;
  users: any;
  id_activity: any;
  userData: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private data: Data,
    public loadCtrl: LoadingController,
    public http: Http,
    public menuCtrl: MenuController
    ) {
      this.menuCtrl.enable(true);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverhomePage');
  }

  ionViewWillEnter() {
    this.data.getData().then((data) => {
      console.log(data);
      this.userData = data;
      this.id_user = data.id_user;
      this.id_activity = data.id_activity;
      this.getPesanan();
   
    })
  }

  
  getPesanan(){
    //apiGet
    this.http.get(this.data.BASE_URL+"/terima_pesanan.php?id_user="+this.id_user).subscribe(data => {
      let response = data.json();   
      console.log(response);
      if(response.status==200){
        this.users= response.data;
        for(let user of this.users){
          if(user.status==0) user.status = false;
          else user.status = true;
        }
      }
      else alert("No Data");
    });
    //apiGet  
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

  gotoKonfirmasi(){
    this.navCtrl.push(KonfirmasiPesananPage, this.userData);
  }

      //apiPost  

}

