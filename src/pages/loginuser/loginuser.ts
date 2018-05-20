import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Http } from '@angular/http';
import { SignupPage } from '../signup/signup';

/**
 * Generated class for the LoginuserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-loginuser',
  templateUrl: 'loginuser.html',
})
export class LoginuserPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.testApi();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginuserPage');
  }

 testApi(){
   this.http.get("http://pokimoli.atspace.cc/db_connect.php").subscribe(data => {console.log(data)
  });
 }
  keuserhome(){
    this.navCtrl.push(HomePage);
  }
  keregister(){
    this.navCtrl.push(SignupPage);
  }
}
