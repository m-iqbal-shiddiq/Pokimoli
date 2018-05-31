import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PesanpokiPage } from '../pesanpoki/pesanpoki';

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

}

