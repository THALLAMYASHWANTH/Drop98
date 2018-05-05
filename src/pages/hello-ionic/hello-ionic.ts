import { Component, ViewChild, ElementRef } from "@angular/core";
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { PopoverController } from 'ionic-angular';
@Component({
  selector: "page-hello-ionic",
  templateUrl: "hello-ionic.html"
})
export class HelloIonicPage {
  @ViewChild("popoverContent", { read: ElementRef })
  content: ElementRef;
  @ViewChild("popoverText", { read: ElementRef })
  text: ElementRef;
  constructor(private popoverCtrl: PopoverController) {}

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPageComponent);
    popover.present({
      ev: myEvent
    });
  }
}
