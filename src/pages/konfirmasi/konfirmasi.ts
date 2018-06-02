import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Data } from '../../provider/data';
/**
 * Generated class for the KonfirmasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
    

  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KonfirmasiPage');
  }

  deleteJob(data){
    let dataJob = data;
    let prompt = this.alertCtrl.create({
      title: 'Delete '+data.judul,
      message: "This action can't be undo",
      buttons: [
        {
          text: 'Delete',
          handler: data => {
            console.log('Delete clicked');
            let loading = this.loadCtrl.create({
              content: 'memuat..'
            });
        
            loading.present();
            //apiPost
            let input = {
              id_todo : dataJob.id_todo
            };
            console.log(input);
            this.http.post(this.data.BASE_URL+"/todo_delete.php",input).subscribe(data => {
            let response = data.json();
            console.log(response); 
            if(response.status==200){    
              this.getJob();
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
