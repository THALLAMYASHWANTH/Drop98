import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler, PopoverController } from 'ionic-angular';
import { MyApp } from './app.component';
import { WelcomePage } from '../pages/welcome/welcome';
import { LoginPage} from '../pages/login/login';
import { SignupPage  } from '../pages/signup/signup';
import { ProfilepagePage } from '../pages/profilepage/profilepage';
import { PopoverPageComponent } from "../components/popover-page/popover-page";
import { IonicStorageModule } from "@ionic/storage";
import { PasswordPage } from "../pages/password/password";
import { ForgotPassPage } from "../pages/forgot-pass/forgot-pass";
import { OtpPage } from "../pages/otp/otp";
import { PhotoPage } from "../pages/photo/photo";
import {TermsPage} from "../pages/terms/terms";
import { DashboardPage } from "../pages/dashboard/dashboard";
import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { DbadminPage } from '../pages/dbadmin/dbadmin';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
//import { Toast } from '@ionic-native/toast';
import{GroupPage} from '../pages/group/group';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,DbadminPage,
    LoginPage,
    WelcomePage,GroupPage,
    SignupPage,
    ForgotPassPage,
    OtpPage,TermsPage,
    DashboardPage,
    PopoverPageComponent,
    HelloIonicPage,ProfilepagePage,PasswordPage,PhotoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,PasswordPage,
    ContactPage,GroupPage,
    HomePage,
    TabsPage,DbadminPage,
    LoginPage,
    WelcomePage,TermsPage,
    SignupPage,
    ForgotPassPage,
    OtpPage,
    DashboardPage,
    PopoverPageComponent,
    HelloIonicPage,ProfilepagePage,PhotoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    /* Toast, */
    Storage,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
