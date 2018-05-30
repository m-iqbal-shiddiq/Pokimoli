import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserPage } from '../user/user';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  email:any;
  password:any;
  nama:any;
  no_hp: any;
  passwordTest:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private data : Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp(){
    if(this.nama && this.email && this.no_hp && this.password && (this.password == this.passwordTest)) {

      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        nama :this.nama,
        no_hp : this.no_hp,
        email : this.email, 
        password : this.password  
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/create_user.php",input).subscribe(data => {
      console.log(data);
      let response = data.json();
      console.log("test");
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal
        
        this.navCtrl.setRoot(HomePage);      
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
  
  
  gotoHome(){
    this.navCtrl.push(HomePage);
  }
  
  gotoUser(){
    this.navCtrl.push(UserPage);
  }

}
