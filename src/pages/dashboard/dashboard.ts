import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, Nav, MenuController, PopoverController } from 'ionic-angular';
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { ListPage } from "../list/list";
import { HelloIonicPage } from "../hello-ionic/hello-ionic";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-dashboard",
  templateUrl: "dashboard.html"
})
export class DashboardPage {
  @ViewChild(Nav) nav: Nav;
  rootPage = HelloIonicPage;
  pages: Array<{ title: string; component: any }>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private popoverCtrl: PopoverController
  ) {
    this.pages = [{ title: "Hello Ionic", component: HelloIonicPage }, { title: "My First List", component: ListPage }];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DashboardPage");
  }
  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
