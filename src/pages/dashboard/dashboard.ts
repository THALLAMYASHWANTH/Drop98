import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { ListPage } from "../list/list";

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
  @ViewChild("popoverContent", { read: ElementRef })
  content: ElementRef;
  @ViewChild("popoverText", { read: ElementRef })
  text: ElementRef;
  pages: Array<{ title: string; component: any }>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menu: MenuController,
    private popoverCtrl: PopoverController
  ) {
    this.pages = [{ title: "List", component: ListPage }];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DashboardPage");
  }
  presentPopover(ev) {
    let popover = this.popoverCtrl.create(PopoverPageComponent, {
      contentEle: this.content.nativeElement,
      textEle: this.text.nativeElement
    });

    popover.present({
      ev: ev
    });
  }
}
