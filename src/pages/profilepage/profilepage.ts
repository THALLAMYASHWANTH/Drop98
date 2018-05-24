import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from "@ionic/storage";
import { DashboardPage } from '../dashboard/dashboard';
import { RemoteServiceProvider } from './../../providers/remote-service/remote-service';

/**
 * Generated class for the ProfilepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profilepage',
  templateUrl: 'profilepage.html',
})
export class ProfilepagePage {

  getInfo: any;
  edit: boolean = null;
swipe(){
  this.navCtrl.pop();
}
  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public remoteService: RemoteServiceProvider) {
    this.getInfo={};
    this.edit = false;
    this.storage.get("token").then(val => {
      let token = val;
      this.storage.get("custid").then(val => {
        let url = "https://www.dbdwater.com/smartmeter_webapp/api/rest/managecustomers/getCustomers/" + val;


        this.remoteService.getPosts(url, token).subscribe((data) => {

          console.log(data);
          this.getInfo.firstname=data.firstName;
          this.getInfo.lastname = data.lastName;
          this.getInfo.username = data.name;
          this.getInfo.email = data.email;
        });
      });
    });
  }
  
    
  

  ionViewDidLoad() {
    console.log(this.getInfo.name+"  "+this.getInfo.userphoto+ "  "+this.getInfo.email+ "  "+this.getInfo.loggedin);
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
}
