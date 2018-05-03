import { Component, ViewChild } from "@angular/core";
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { OtpPage } from "../otp/otp";


@Component({
  selector: "page-forgot-pass",
  templateUrl: "forgot-pass.html"
})
export class ForgotPassPage {
  @ViewChild("input") myInput;
  public formData: any;
  public demail: string = "abc@dbd.com";
  public mymsg: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.formData = {};
  }
  ionViewDidLoad() {}

  // RESET PASSWORD TASTS
  resetPass() {
    this.validateemail();
  }
  validateemail() {
    var re = /^(?:[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&amp;'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;
    if (re.test(this.formData.email)) {
      if (this.formData.email == this.demail) {
        let loader = this.loadingCtrl.create();
        loader.present();
        setTimeout(() => {
          // THIS TIMEOUT IS UNNECESSARY, IT'S JUST FOR THE EXAMPLE
          //this.navCtrl.pop()  RETURN TO LOGIN PAGE
        }, 1000);
        loader.dismiss();
        this.mymsg = "OTP has been sent to You";
        this.navCtrl.push(OtpPage);
      } else {
        this.mymsg = "Email not found with us";
      }
    } else {
      this.mymsg = "Enter Valid email";
      setTimeout(() => { this.myInput.setFocus(); }, 150);
    }
  }
}
