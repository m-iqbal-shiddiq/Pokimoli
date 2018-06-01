import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { HomePage } from '../home/home';
/**
 * Generated class for the PesanpokiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesanpoki',
  templateUrl: 'pesanpoki.html',
})
export class PesanpokiPage {
  lokasi_penjemputan: any;
  lokasi_tujuan: any;
  keterangan: any;
  id_user: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    private data: Data,
    public http: Http
    ) {
  
      this.data.getData().then((data) =>
      {
        console.log(data);
   
        this.id_user = data.id_user;
   
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PesanpokiPage');
  }

  pesanPoki(){
    if(this.lokasi_penjemputan && this.lokasi_tujuan && this.keterangan) {

      let loading = this.loadCtrl.create({
        content: 'Menunggu poki..'
      });

      loading.present();

      //apiPost
      let input = {
        id_user : this.id_user,
        lokasi_penjemputan :this.lokasi_penjemputan,
        lokasi_tujuan : this.lokasi_tujuan,
        keterangan : this.keterangan, 
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/pesan_poki.php?id_user="+this.id_user,input).subscribe(data => {
      console.log(data);
      let response = data.json();
      console.log("test");
      console.log(response); 
      if(response.status==200){    
 
        
        this.navCtrl.push(HomePage);      
        loading.dismiss();
      }
      else if(response.status==409) {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Email sudah terdaftar',      
            buttons: ['OK']
          });
          alert.present();
          loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Gagal membuat akun',      
            buttons: ['OK']
          });
          alert.present();      
          loading.dismiss();
      }    
      });
      //apiPost  
    }
  }

}
