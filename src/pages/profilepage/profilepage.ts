import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";

/**
 * Generated class for the ProfilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilepage',
  templateUrl: 'profilepage.html',
})
export class ProfilepagePage {

  getInfo: any;
swipe(){
  this.navCtrl.pop();
}
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage) {
    this.getInfo={};
    storage.get('user').then((val) => {
      this.getInfo.name = val;
    });
    storage.get("logo").then(val => {
      this.getInfo.userphoto = val;
      console.log(val);
    });
    storage.get("email").then(val => {
      this.getInfo.email = val;
    });
    storage.get("auth").then(val => {
      this.getInfo.loggedin = val;
    });
  }

  ionViewDidLoad() {
    console.log(this.getInfo.name+"  "+this.getInfo.userphoto+ "  "+this.getInfo.email+ "  "+this.getInfo.loggedin);
  }

}
