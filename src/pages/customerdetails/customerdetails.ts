<<<<<<< HEAD
import { Component ,ViewChild, OnInit, Renderer, Input } from '@angular/core';
=======
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';
import { Component } from '@angular/core';
>>>>>>> dd83fca76794752d1742c77cac8065a31ee8ec47
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

<<<<<<< HEAD
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
=======
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public remoteService:RemoteServiceProvider) {
    this.getInfo={};
>>>>>>> dd83fca76794752d1742c77cac8065a31ee8ec47
    this.edit = false;
    this.storage.get("token").then(val => {
      let token = val;
      this.storage.get("custid").then(val => {
        let url = "http://www.dbdwater.com/smartmeter_webapp/api/rest/managecustomers/getCustomers/" + val;


        this.remoteService.getPosts(url, token).subscribe((data) => {

          console.log(data);
        });
      });
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
 
