import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
/**
 * Generated class for the KonfirmasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-konfirmasi',
  templateUrl: 'konfirmasi.html',
})
export class KonfirmasiPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private data: Data,
    public loadCtrl: LoadingController,
    public http: Http
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfirmasiPage');
  }

  konfirmasi(data){
    let dataActivity = data;
    let prompt = this.alertCtrl.create({
      title: 'Konfirmasi ',
      message: "Anda yakin sudah diantar?",
      buttons: [
        {
          text: 'YA',
          handler: data => {
            console.log('Delete clicked');
            let loading = this.loadCtrl.create({
              content: 'memuat..'
            });
        
            loading.present();
            //apiPost
            let input = {
              id_activity : dataActivity.id_activity
            };
            console.log(input);
            this.http.post(this.data.BASE_URL+"/delete_activity.php",input).subscribe(data => {
            let response = data.json();
            console.log(response); 
            if(response.status==200){    
              
              loading.dismiss();
            }
            else {
              loading.dismiss();
                let alert = this.alertCtrl.create({
                  title: 'Failed',
                  message: 'please try again',      
                  buttons: ['OK']
                });
                alert.present();      
                loading.dismiss();
            }    
            });
            //apiPost
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            
          }
        }
      ]
    });
    prompt.present();
  }

}
