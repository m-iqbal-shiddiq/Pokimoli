import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { DriverhomePage } from '../driverhome/driverhome';
/**
 * Generated class for the KonfirmasiPesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-konfirmasi-pesanan',
  templateUrl: 'konfirmasi-pesanan.html',
})
export class KonfirmasiPesananPage {
  nama_user: any;
  no_hp: any;
  lokasi_penjemputan: any;
  lokasi_tujuan: any;
  keterangan: any;
  id_activity: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data: Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http
  ) {
    let temp = this.navParams.data;
    this.id_activity = temp.id_activity;
    this.nama_user = temp.nama_user;
    this.no_hp = temp.no_hp;
    this.lokasi_penjemputan = temp.lokasi_penjemputan;
    this.lokasi_tujuan = temp.lokasi_tujuan;
    this.keterangan = temp.keterangan;
    console.log(this.id_activity);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfirmasiPesananPage');
  }

  jemput(){
      
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        id_activity: this.id_activity
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/update_trig.php?id_activity="+this.id_activity,input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.navCtrl.setRoot(DriverhomePage);  
        loading.dismiss();
      }
      });
      //apiPost  
      
    } 
  }



