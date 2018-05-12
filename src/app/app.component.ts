import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from "@ionic/storage";
import { WelcomePage } from '../pages/welcome/welcome';
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { DbadminPage } from "../pages/dbadmin/dbadmin";
import {GroupPage } from "../pages/group/group";
@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = null;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private storage: Storage
) {
    platform.ready().then(() => {
      let that = this;
      this.storage.get("user").then(resp => {
        if (resp !== null) {
          console.log(resp);
          this.rootPage=GroupPage;
        }
        else
        {
          this.rootPage = WelcomePage;
        }
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
