import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public formData: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.formData = {};
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  login(){

  }

  // GO TO FORGOT PASSWORD PAGE
  goToForgotPass(){
    this.navCtrl.push(ForgotPassPage);
  }
}
