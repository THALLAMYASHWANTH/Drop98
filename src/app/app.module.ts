import { GroupPage } from './../pages/group/group';
import { DashboardPage } from './../pages/dashboard/dashboard';
import { OtpPage } from './../pages/otp/otp';
import { WelcomePage } from './../pages/welcome/welcome';
import { DbadminPage } from './../pages/dbadmin/dbadmin';
import { PasswordPage } from './../pages/password/password';
import { ItemDetailsPage } from './../pages/item-details/item-details';
import { ForgotPassPage } from './../pages/forgot-pass/forgot-pass';
import { HomePage } from './../pages/home/home';
import { ContactPage } from './../pages/contact/contact';
import { AboutPage } from './../pages/about/about';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Http, HttpModule } from '@angular/http';
import { IonicApp, IonicModule, IonicErrorHandler, PopoverController } from 'ionic-angular';
import { MyApp } from './app.component';
import { LoginPage} from '../pages/login/login';
import { SignupPage  } from '../pages/signup/signup';
import { ProfilepagePage } from '../pages/profilepage/profilepage';
import { PopoverPageComponent } from "../components/popover-page/popover-page";
import { IonicStorageModule } from "@ionic/storage";
import { PhotoPage } from "../pages/photo/photo";
import {TermsPage} from "../pages/terms/terms";
import { HelloIonicPage } from "../pages/hello-ionic/hello-ionic";
import { TabsPage } from '../pages/tabs/tabs';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NativeStorage } from '@ionic-native/native-storage';
import { InvoicePage } from '../pages/invoice/invoice'; //import { Toast } from '@ionic-native/toast';
import { CustomerdetailsPage } from "../pages/customerdetails/customerdetails";
import { RemoteServiceProvider } from "../providers/remote-service/remote-service";
import { HttpClientModule } from "@angular/common/http";
@NgModule({
  declarations: [
    MyApp, AboutPage, ContactPage, HomePage, ForgotPassPage, ItemDetailsPage, HelloIonicPage, TabsPage, PasswordPage, GroupPage, DbadminPage,LoginPage,WelcomePage,TermsPage,SignupPage,OtpPage,DashboardPage,PopoverPageComponent,ProfilepagePage,PhotoPage,InvoicePage,CustomerdetailsPage,GroupPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
  HttpModule, HttpClientModule],
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
    PopoverPageComponent,PasswordPage,
    HelloIonicPage,ProfilepagePage,PhotoPage,InvoicePage,CustomerdetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    /* Toast, */
    IonicStorageModule,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RemoteServiceProvider
  ]
})
export class AppModule {}
