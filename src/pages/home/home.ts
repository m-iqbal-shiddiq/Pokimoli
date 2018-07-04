import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesanpokiPage } from '../pesanpoki/pesanpoki';
import { ProfilePage } from '../profile/profile';
import { MapmoliPage } from '../mapmoli/mapmoli';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PesanpokiPage');
  }
  gotoPesanpoki(){
    this.navCtrl.push(PesanpokiPage);
  }
  gotoProfile(){
    this.navCtrl.push(ProfilePage);
  }
  gotomapmoli(){
    this.navCtrl.push(MapmoliPage);
  }

}

