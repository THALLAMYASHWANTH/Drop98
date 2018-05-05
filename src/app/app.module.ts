import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, PopoverController } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage} from '../pages/login/login';
import { SignupPage  } from '../pages/signup/signup';

import { PopoverPageComponent } from "../components/popover-page/popover-page";
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from "@ionic/storage";

import { ForgotPassPage } from "../pages/forgot-pass/forgot-pass";
import { OtpPage } from "../pages/otp/otp";

import { DashboardPage } from "../pages/dashboard/dashboard";
import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    SignupPage,
    ForgotPassPage,
    OtpPage,
    DashboardPage,
    PopoverPageComponent,
    HelloIonicPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    WelcomePage,
    SignupPage,
    ForgotPassPage,
    OtpPage,
    DashboardPage,
    PopoverPageComponent,
    HelloIonicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
