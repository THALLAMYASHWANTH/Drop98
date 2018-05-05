import { Component } from '@angular/core';
import {NavParams} from 'ionic-angular';
import { ViewController } from "ionic-angular";

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
  public viewCtrl: ViewController;
  constructor(private navParams: NavParams) {}

  ngOnInit() {}
  close() {
    this.viewCtrl.dismiss();
  }
}
