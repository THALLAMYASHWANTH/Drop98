import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { DashboardPage } from '../dashboard/dashboard';
import { Storage } from "@ionic/storage";
import {
  SecureStorage,
  SecureStorageObject
} from "@ionic-native/secure-storage";
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { NativeStorage } from "@ionic-native/native-storage";
import {Observable} from 'rxjs';


@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public formData: any;
  constructor(
    private nativeStorage: NativeStorage,
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {
    this.formData = {};
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  public logincheck(username: any, password: any) {
    let data = { success: 1 };

    if (password !== "password") data.success = 0;

    return Observable.from([data]);
  }

  login() {
    this.logincheck(this.formData.phone, this.formData.pass).subscribe(res => {
      console.log(res);

      if (res.success) {
        //securely store
        this.storage.set("user", this.formData.phone);
        this.storage.set("pass", this.formData.pass);
        //thx mike for hack to remove back btn
        this.navCtrl.setRoot(DashboardPage, null, { animate: true });
      } else {
      }
    });
  }

  // GO TO FORGOT PASSWORD PAGE
  goToForgotPass() {
    this.navCtrl.push(ForgotPassPage);
  }
}
