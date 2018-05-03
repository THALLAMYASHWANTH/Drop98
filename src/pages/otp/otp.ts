import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-otp",
  templateUrl: "otp.html"
})
export class OtpPage {
  public mymsg: string;
  @ViewChild("input") myInput;
  public formData: any;
  public otp: number = 123;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.formData = {};
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OtpPage");
  }
  resetPass() {
    if (this.formData.otp == this.otp) {
      this.navCtrl.pop();
    } else {
      this.mymsg = "Invalid OTP";
      this.formData.otp = "";
      setTimeout(() => {
        this.myInput.setFocus();
      }, 150);
    }
  }
}
