import { iterator } from 'rxjs/symbol/iterator';
import { Component,ViewChild } from '@angular/core';
import { NavParams, NavController, App, PopoverController } from 'ionic-angular';
import { ViewController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { WelcomePage } from "../../pages/welcome/welcome";
import { ProfilepagePage } from "../../pages/profilepage/profilepage";
import { PasswordPage } from '../../pages/password/password';
import { PhotoPage } from '../../pages/photo/photo';
/**
 * Generated class for the PopoverPageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "popover-page",
  templateUrl: "popover-page.html"
})
export class PopoverPageComponent {
  public navCtrl: NavController;
  public viewCtrl: ViewController;
  public user = "";
  constructor(
    private navParams: NavParams,
    private storage: Storage,
    public app: App,
    public viewCtrls: ViewController,
  ) {
    storage.get("user").then(val => {
      this.user = val;
    });
  }

  ngOnInit() {}
  profile() {
    this.viewCtrls.dismiss();
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(ProfilepagePage);
  }
  passwordp() {
    this.viewCtrls.dismiss();
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(PasswordPage);
  }
  pic() {
    this.viewCtrls.dismiss();
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(PhotoPage);
  }
  logout() {
    this.storage.remove("email");
    this.storage.remove("logo");
    this.storage.remove("auth");
    this.storage.remove("custid");
    this.storage.remove("custtype");
    this.storage.remove("token");
    this.storage.remove("user");
    this.storage.remove("pass");
    this.viewCtrls.dismiss();
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(WelcomePage);
  }
}
