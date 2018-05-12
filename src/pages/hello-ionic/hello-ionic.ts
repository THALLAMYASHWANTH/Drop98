import { Component, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { PopoverController, IonicPage } from 'ionic-angular';
import { NavController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Storage } from "@ionic/storage";
import { Http, HttpModule } from '@angular/http';

declare var google: any;


@Component({
    selector: "page-hello-ionic",
    templateUrl: "hello-ionic.html"
})
export class HelloIonicPage {
    monthlabel: any=[];
    monthdata: any=[];
    //@ViewChild('barCanvas') barCanvas;
    @ViewChild("wsource") wsourcecanvas;
    @ViewChild("wdrink") wdrinkcanvas;
    @ViewChild("wutility") wutilitycanvas;
    @ViewChild("wother") wothercanvas;
    @ViewChild("monthusage") monthusagecanvas;
    @ViewChild("paysummary") paysummarycanvas;
    @ViewChild('map') mapRef:ElementRef;
    //@ViewChild('lineCanvas') lineCanvas;

    public xhttp: any;
    getInfo: any;
    response: any;

    //barChart: any;
    wsourcechart: any;
    wdrinkchart: any;
    wotherchart: any;
    wutilitychart: any;
    //lineChart: any;
    monthusagechart: any;
    paysummarychart: any;
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
      //{ myData: this.popoverCtrl.create(PopoverPageComponent)};
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
                        data: [
                            this.response[201802000015][0].numberOfUnits,
                            this.response[201802000015][1].numberOfUnits,
                            this.response[201802000015][2].numberOfUnits
                        ],
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

        this.wdrinkchart = new Chart(this.wdrinkcanvas.nativeElement, {
            type: "doughnut",
            data: {
                labels: ["Drinking Water"],
                datasets: [
                    {
                        label: "# of Ltrs",
                        data: [this.response[201802000015][0].numberOfUnits],
                        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
                        hoverBackgroundColor: ["#36A2EB"]
                    }
                ]
            }
        });

        this.wutilitychart = new Chart(this.wutilitycanvas.nativeElement, {
            type: "doughnut",
            data: {
                labels: ["Utility Water"],
                datasets: [
                    {
                        label: "# of Ltrs",
                        data: [this.response[201802000015][1].numberOfUnits],
                        backgroundColor: ["rgba(255, 159, 64, 0.2)"],
                        hoverBackgroundColor: ["#FFCE56"]
                    }
                ]
            }
        });

        this.wotherchart = new Chart(this.wothercanvas.nativeElement, {
            type: "doughnut",
            data: {
                labels: ["Other Water"],
                datasets: [
                    {
                        label: "# of Ltrs",
                        data: [this.response[201802000015][2].numberOfUnits],
                        backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                        hoverBackgroundColor: ["#FF6384"]
                    }
                ]
            }
        });

        for (var i = 0; i < this.response[201802000015].length; i++) {
            this.monthdata.push(this.response[201802000015][i].numberOfUnits);
            this.monthlabel.push(this.response[201802000015][i].incomingDate);

        }

        this.monthusagechart = new Chart(this.monthusagecanvas.nativeElement, {

            type: 'line',
            data: {
                labels: this.monthlabel,
                datasets: [
                    {
                        label: "Ltr",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: this.monthdata,
                        spanGaps: false,
                    },
                    {
                    label: "Ltr",
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.monthdata,
                    spanGaps: false,
                  }
                ]
            }

        });


        this.paysummarychart = new Chart(this.paysummarycanvas.nativeElement, {

            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July"],
                datasets: [
                    {
                        label: "Amount",
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [65, 59, 80, 81, 56, 55, 40],
                        spanGaps: false,
                    }
                ]
            }

        });
        this.DisplayMap();
    }
    DisplayMap(){
        const location =new google.maps.LatLng('17.401941','78.471730');

        const options={
          center:location,
          zoom:10
        };
         const map=new google.maps.Map(this.mapRef.nativeElement,options);
        }
}
