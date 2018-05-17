import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AkunuserPage} from '../akunuser/akunuser';
import {MapmoliPage} from '../mapmoli/mapmoli';
import {PesanpokiPage} from '../pesanpoki/pesanpoki';


/**
 * Generated class for the HomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homepage',
  templateUrl: 'homepage.html',
})
export class HomepagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomepagePage');
  }



  keakunuser(){
    this.navCtrl.push(AkunuserPage);
  }


  kemapmoli(){
    this.navCtrl.push(MapmoliPage);
  }
  kepesanpoki(){
    this.navCtrl.push(PesanpokiPage);
  }
}
