import { $$iterator } from 'rxjs/symbol/iterator';
import { Component,ViewChild } from '@angular/core';
import {NavParams, NavController, App} from 'ionic-angular';
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
  public user = "Vishnu";
  constructor(
    private navParams: NavParams,
    private storage: Storage,
    public app: App
  ) {}

  ngOnInit() {}
  profile(){
    const root = this.app.getRootNav();
    root.popToRoot();
    let nav = this.app.getRootNav();
    nav.setRoot(ProfilepagePage);
  }
  passwordp()
  {
    const root = this.app.getRootNav();
    root.popToRoot();
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
