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
import { TermsPage } from '../terms/terms';
import { Toast } from '@ionic-native/toast';


@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  public formData: any;
  public pass1: string ="password";
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
    private toast: Toast,
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
    if(this.formData.agree){
      if(this.checklogin()){
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
    });}
  
}
else{ 
  this.msg1="please read terms and conditions";
}}
  checklogin() {
    var flag = 0,
      flag2 = 0;
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    

    if (re.test(this.formData.phone)) {
      flag = 1;
    } else {
      this.msg1 = "please enter valid moblie number or password";
      return false;
    }
    if (this.formData.pass==this.pass1) {
      flag2 = 1;
    } else {
      this.msg1 = "please enter valid moblie number or password";
      return false;
    }
    if (flag == 1 && flag2 == 1) {
      this.msg1 = "login successfull";
    return true;
    }
  }

  // GO TO FORGOT PASSWORD PAGE
  goToForgotPass() {
    this.navCtrl.push(ForgotPassPage);
  }
  openTerms(){
    this.navCtrl.push(TermsPage);
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
