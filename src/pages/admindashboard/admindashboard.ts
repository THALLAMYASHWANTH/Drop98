import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, MenuController, PopoverController } from 'ionic-angular';
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { ListPage } from "../list/list";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";

/**
 * Generated class for the AdmindashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admindashboard',
  templateUrl: 'admindashboard.html',
})
export class AdmindashboardPage {
  
  @ViewChild(Nav) nav: Nav;
  rootPage = HelloIonicPage;
  pages: Array<{ icon:string; title: string; component: any }>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private popoverCtrl: PopoverController
  ) {
    this.pages = [{ icon:"home",title: "Dashboard", component: HelloIonicPage }, { icon:"paper",title: "Billing Management", component: ListPage }];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AdmindashboardPage");
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
