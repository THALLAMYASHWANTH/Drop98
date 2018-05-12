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

  ) {
    storage.get("user").then(val => {
      this.user = val;
    });
  }

  ngOnInit() {}
  profile() {
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(ProfilepagePage);
  }
  passwordp() {
    /*let popover = this.popoverCtrl.create(PopoverPageComponent);
    //let popover = this.navParams.get("myData");
    console.log("popover " + popover);

       popover.dismiss();*/



    const root = this.app.getRootNav();
    console.log("root " + root);
    root.dismiss();
    root.popToRoot();
    //let popMenuRoot = this.app.getR();
    //console.log("popMenuRoot " + popMenuRoot);
    let nav = this.app.getRootNav();
    nav.setRoot(PasswordPage);
  }
  pic() {
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(PhotoPage);
  }
  logout() {
    this.storage.remove("user");
    this.storage.remove("pass");
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(WelcomePage);
  }
}
