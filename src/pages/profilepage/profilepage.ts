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
    this.getInfo.name = this.storage.get("user");
    this.getInfo.userphoto = this.storage.get("logo");
    this.getInfo.email = this.storage.get("email");
    this.getInfo.loggedin = this.storage.get("auth");

  }

  ionViewDidLoad() {
    console.log(this.getInfo.name+"  "+this.getInfo.userphoto+ "  "+this.getInfo.email+ "  "+this.getInfo.loggedin);
  }

}
