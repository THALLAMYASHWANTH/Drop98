import { Component, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { PopoverController, IonicPage } from 'ionic-angular';
import { NavController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Storage } from "@ionic/storage";
import { Http, HttpModule } from '@angular/http';


@Component({
  selector: "page-hello-ionic",
  templateUrl: "hello-ionic.html"
})
export class HelloIonicPage {
  //@ViewChild('barCanvas') barCanvas;
  @ViewChild("wsource") wsourcecanvas;
  @ViewChild("wdrink") wdrinkcanvas;
  @ViewChild("wutility") wutilitycanvas;
  @ViewChild("wother") wothercanvas;
  //@ViewChild('lineCanvas') lineCanvas;

  public xhttp: any;
  getInfo: any;
  response:any;

  //barChart: any;
  wsourcechart: any;
  wdrinkchart: any;
  wotherchart: any;
  wutilitychart: any;
  //lineChart: any;
  @ViewChild("popoverContent", { read: ElementRef })
  content: ElementRef;
  @ViewChild("popoverText", { read: ElementRef })
  text: ElementRef;
  constructor(
    private popoverCtrl: PopoverController,
    public navCtrl: NavController,
    private storage: Storage
  ) {
    this.getInfo = {};
    storage.get("user").then(val => {
      this.getInfo.name = val;
    });
    storage.get("pass").then(val => {
      this.getInfo.pass = val;
      console.log(val);
    });
    this.xhttp = new XMLHttpRequest();
    this.xhttp.open(
      "GET",
      "http://www.dbdwater.com/smartmeter_webapp/api/rest/meter/get30DayReadings/3000021",
      false
    );
    this.xhttp.setRequestHeader("Content-type", "application/json");
    /* this.xhttp.setRequestHeader(
      "Authorization",
      "Basic " + btoa(this.getInfo.name + ":" + this.getInfo.pass)
    ); */
    this.xhttp.setRequestHeader(
      "Authorization",
      "Basic " + "c3lzdXNlcjpQYXNzd29yZDEj"
    );
    this.xhttp.send();

    console.log(this.xhttp.responseText);

    this.response = JSON.parse(this.xhttp.responseText);
    console.log(this.response[201802000015]);
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPageComponent);
    popover.present({
      ev: myEvent
    });
  }

  ionViewDidLoad() {
    this.wsourcechart = new Chart(this.wsourcecanvas.nativeElement, {
      type: "doughnut",
      data: {
        labels: ["Drinking Water", "Other Water", "Utility Water  "],
        datasets: [
          {
            label: "# of Ltrs",
            data: [this.response[201802000015][0].numberOfUnits,
              this.response[201802000015][1].numberOfUnits,
              this.response[201802000015][2].numberOfUnits],
            backgroundColor: [
              "rgba(54, 162, 235, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            hoverBackgroundColor: ["#36A2EB", "#FF6384", "#FFCE56"]
          }
        ]
      }
    });
  }
}
