import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
   public getInfo={
    name:'',
    userphoto:'',
    email:'',
    loggedin:false

  }
swipe(){
  this.navCtrl.pop();
}
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getInfo.name=this.navParams.get('name')
    this.getInfo.userphoto=this.navParams.get('userphoto')
    this.getInfo.email=this.navParams.get('email')
    this.getInfo.loggedin=this.navParams.get('loggedin')  
  }

  ionViewDidLoad() {
    console.log(this.getInfo.name+"  "+this.getInfo.userphoto+ "  "+this.getInfo.email+ "  "+this.getInfo.loggedin);
  }

}
