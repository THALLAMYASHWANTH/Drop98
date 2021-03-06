import { Component,ViewChild,ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { ListPage } from "../list/list";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";
/**
 * Generated class for the DbadminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dbadmin',
  templateUrl: 'dbadmin.html',
})
export class DbadminPage {
  @ViewChild(Nav) nav: Nav;
  rootPage = HelloIonicPage;
  pages: Array<{ icon:string; title: string; component: any }>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DbadminPage');
  }

}
