import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, LoadingController, AlertController} from 'ionic-angular';
import { HttpModule, Http } from "@angular/http";
import { TabsPage } from '../tabs/tabs';
import { ForgotPassPage } from '../forgot-pass/forgot-pass';
import { DashboardPage } from '../dashboard/dashboard';
import { Storage } from "@ionic/storage";
//import * as $ from 'jquery';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';


@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public formData: any;
  public msg1: any;
  public msg2: any;
  public msg3: any;
  public forphone: any;
  public forpass: any;
  public xhttp: any;
  public passtype: string = "password";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public http: Http,
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.formData = {};
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  apicheck()
  {

  }
  public logincheck(username: any, password: any) {
    let data = { success: 0 };

    this.xhttp = new XMLHttpRequest();

    /* this.xhttp.ontimeout = function () {
      console.error("The request  "  + " timed out.");
    }; */
    this.xhttp.open("GET", "http://www.dbdwater.com/smartmeter_webapp/api/rest/login/getLoginDetails", false);
    this.xhttp.setRequestHeader("Content-type", "application/json");
    this.xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
    this.xhttp.setRequestHeader(
      "Authorization",
      "Basic " + btoa(username + ":" + password)
    );


    /* this.xhttp.onreadystatechange = function () {
      if (this.xhttp.readyState === 4 && this.xhttp.status === 200) {
        console.log(this.xhttp.responseText);
      }
    }; */

    //this.xhttp.timeout= 2000;
    this.xhttp.send();

    console.log(this.xhttp.responseText);

    var response = JSON.parse(this.xhttp.responseText);

    console.log(response.authenticated);

    if (response.authenticated){
      this.storage.set("email", response.email);
      this.storage.set("logo", response.logo);
      this.storage.set("auth", response.authenticated);
       data.success = 1;
    }

    return Observable.from([data]);
  }

  login() {
    //this.checklogin();
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
  checklogin() {
    var flag = 0,
      flag2 = 0;
    var re = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var pass1 = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

    if (re.test(this.formData.phone)) {
      flag = 1;
    } else {
      this.msg1 = "please enter valid moblie number or password";
    }
    if (pass1.test(this.formData.pass)) {
      flag2 = 1;
    } else {
      this.msg1 = "please enter valid moblie number or password";
    }
    if (flag == 1 && flag2 == 1) {
      this.msg1 = "login successfull";
    }
  }

  // GO TO FORGOT PASSWORD PAGE
  goToForgotPass() {
    this.navCtrl.push(ForgotPassPage);
  }
  showHide() {
    if (this.passtype == "password") {
      this.passtype = "text";
    } else {
      this.passtype = "password";
    }
    return false;
  }
}
