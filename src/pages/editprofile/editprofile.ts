import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
import { Http } from '@angular/http';
import { ProfilePage } from '../profile/profile';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

 id_user: any;
 email: any;
 nama: any;
 no_hp: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private data: Data,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController,
    public http: Http) {

      let temp = this.navParams.data;
      this.id_user = temp.id_user;
      this.nama = temp.nama_user;
      this.email = temp.email_user;
      this.no_hp = temp.no_hp;
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }

  editProfile(){
    if(this.nama && this.email && this.no_hp){
      
      let loading = this.loadCtrl.create({
        content: 'memuat..'
      });

      loading.present();

      //apiPost
      let input = {
        id_user: this.id_user,
        nama_user :this.nama,
        email_user: this.email,
        no_hp: this.no_hp, 
       
      };
      console.log(input);
      this.http.post(this.data.BASE_URL+"/update_user.php?id_user="+this.id_user,input).subscribe(data => {
      let response = data.json();
      console.log(response); 
      if(response.status==200){    
        this.data.logout();
        
        this.data.login(response.data,"user");//ke lokal

        this.navCtrl.setRoot(ProfilePage);  
        loading.dismiss();
      }
      else {
        loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Failed Editing Account',      
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
