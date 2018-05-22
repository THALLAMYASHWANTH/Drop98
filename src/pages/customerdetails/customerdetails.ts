import { Component ,ViewChild, OnInit, Renderer, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { DashboardPage } from '../dashboard/dashboard';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

 
/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customerdetails.html',
})
export class CustomerdetailsPage implements OnInit {
  getInfo: any;
  edit: boolean = null;
  information: any[];
  accordionExapanded = true;
  @ViewChild("cc") cardContent: any;
  @ViewChild("cc1") cardContent1: any;
  @ViewChild("cc2") cardContent2: any;
  @Input('title') title: string;

  icon: string = "arrow-forward";



  constructor(public navCtrl: NavController, public navParams: NavParams,private storage: Storage, private http: Http,public renderer: Renderer) {
  }
  ngOnInit() {
    console.log(this.cardContent.nativeElement);
   this.renderer.setElementStyle(this.cardContent.nativeElement, "webkitTransition", "max-height 10ms, padding 500ms");
  this.renderer.setElementStyle(this.cardContent1.nativeElement, "webkitTransition", "max-height 10ms, padding 500ms");
   this.renderer.setElementStyle(this.cardContent2.nativeElement, "webkitTransition", "max-height 10ms, padding 2000ms");
  }

  toggleAccordion() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent.nativeElement, "max-height", "800px");
      this.renderer.setElementStyle(this.cardContent.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }
  
  toggleAccordion1() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent1.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }

  toggleAccordion2() {
    if (this.accordionExapanded) {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "0px");
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "padding", "0px 16px");

    } else {
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "max-height", "500px");
      this.renderer.setElementStyle(this.cardContent2.nativeElement, "padding", "13px 16px");

    }

    this.accordionExapanded = !this.accordionExapanded;
    this.icon = this.icon == "arrow-forward" ? "arrow-down" : "arrow-forward";

  }
  
 
/*
     this.getInfo={};
    this.edit = false;
    storage.get('user').then((val) => {
      this.getInfo.name = val;
    });
    storage.get("logo").then(val => {
      this.getInfo.userphoto = val;
      console.log(val);
    });
    storage.get("email").then(val => {
      this.getInfo.email = val;
    });
    storage.get("auth").then(val => {
      this.getInfo.loggedin = val;
    });
    storage.get("custtype").then(val => {
      this.getInfo.privilege = val;
    });
  
*/
  ionViewDidLoad() {
   // console.log("  "+this.getInfo.userphoto+ "  "+this.getInfo.email+ "  "+this.getInfo.loggedin);
  }
  onClicked(toggle){
    if(this.edit==true){
    }
    this.edit = toggle;
  } 
  onSubmit(formValue: any){
    console.log(formValue);
  }
 backing(){
   this.navCtrl.push(DashboardPage);
  }
 Dashboard()
 {
  this.navCtrl.push(DashboardPage);

 }}
 
