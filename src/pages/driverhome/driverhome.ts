import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { WelcomePage } from '../welcome/welcome';
import { Http } from '@angular/http';
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
  activity: any;
  id_user: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private data: Data,
    public http: Http
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DriverhomePage');
  }

  ionViewWillEnter() {
    this.data.getData().then((data) => {
      console.log(data);
      this.id_user = data.id_user;
      this.getJob();
    })
  }

  getJob(){
    //apiGet
    this.http.get(this.data.BASE_URL+"/todo_read.php?id_user="+this.id_user).subscribe(data => {
      let response = data.json();
      console.log(response);
      if(response.status==200){
        this.activity = response.data;
        for(let job of this.activity){
          if(job.status==0) job.status = false;
          else job.status = true;
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

}
