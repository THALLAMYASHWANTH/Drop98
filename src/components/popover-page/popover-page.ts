import { $$iterator } from 'rxjs/symbol/iterator';
import { Component,ViewChild } from '@angular/core';
import {NavParams, NavController, App} from 'ionic-angular';
import { ViewController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { WelcomePage } from "../../pages/welcome/welcome";

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
  close() {
    this.viewCtrl.dismiss();
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
