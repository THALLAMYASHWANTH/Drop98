import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams, MenuController, PopoverController } from 'ionic-angular';
import { PopoverPageComponent } from "../../components/popover-page/popover-page";

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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    menu: MenuController,
    private popoverCtrl: PopoverController
  ) {
    menu.enable(true);
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
