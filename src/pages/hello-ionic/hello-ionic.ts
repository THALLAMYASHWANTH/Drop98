import { Component, ViewChild, ElementRef } from "@angular/core";
import { Chart } from "chart.js";
import { PopoverPageComponent } from "../../components/popover-page/popover-page";
import { PopoverController, IonicPage } from 'ionic-angular';
import { NavController } from "ionic-angular";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";
import { Storage } from "@ionic/storage";
import { Http, HttpModule } from '@angular/http';
import { RemoteServiceProvider } from "./../../providers/remote-service/remote-service";
import * as HighCharts from 'highcharts';
import {HighchartsMore} from 'highcharts-more';

declare var google: any;


@Component({
    selector: "page-hello-ionic",
    templateUrl: "hello-ionic.html"
})
export class HelloIonicPage {
  totalusage=0;
  otherwater=[];
  postList: any;
    monthlabel=[];
    monthdata =[];
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
    utilwater=[];
    drinkwater=[];
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
        private storage: Storage,
      private remoteService: RemoteServiceProvider
    ) {
      this.getpaysummary();
      this.getmeterstatus();
      this.sample();
      this.showChart;
  }
  getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
  getpaysummary()
  {
    this.getInfo = {};
    this.storage.get("token").then(val => {
      let token = val;
      this.storage.get("custid").then(val => {
          let url = "https://www.dbdwater.com/smartmeter_webapp/api/rest/meter/get30DayReadings/" + val;


          this.remoteService.getPosts(url, token).subscribe((data) => {
            this.response = data;
            console.log(data);
            let chartdata = [];
            for (var key in data) {
              if (data.hasOwnProperty(key)) {
                //console.log(key, data[key]);
                let color=this.getRandomColor();
                let dataset = {
                  label:key,
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: color,
                  borderColor: color,
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: color,
                  pointBackgroundColor: "#fff",
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: color,
                  pointHoverBorderColor: color,
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: [],
                  spanGaps: false,
                }
                let tempdata = [];
                this.monthlabel=[];
                for (var k in data[key]) {
                  //console.log(data[key][k]);
                  this.monthlabel.push(data[key][k].incomingDate);
                  tempdata.push(data[key][k].numberOfUnits);
                }
                dataset.data = tempdata;
                chartdata.push(dataset);
                //console.log(dataset);
              }
            }
            this.monthdata = chartdata;
            //console.log(this.monthdata);



            this.monthusagechart = new Chart(this.monthusagecanvas.nativeElement, {

              type: 'line',
              data: {
                labels: this.monthlabel,
                datasets: this.monthdata
              }

            });


        });
      });
    });

  }


  getmeterstatus()
  {
    this.storage.get("token").then(val => {
      let token = val;
      this.storage.get("custid").then(val => {
        let url = "https://www.dbdwater.com/smartmeter_webapp/api/rest/meter/getMeterStatus/" + val;
        this.remoteService.getPosts(url, token).subscribe((data) => {
          this.response = data;
          console.log(data);
          for (var k in data)
          {
            if (k =="Utility Water$Ltr")
            {
              for(let y in data[k][0])
              {
                this.utilwater.push(data[k][0][y]);
              }

            }
            else if (k == "Drinking Water$Ltr") {
                   for (let y in data[k][0]) {
                     this.drinkwater.push(data[k][0][y]);
                   }
                 }
            else {
              for (let y in data[k][0]) {
                this.otherwater.push(data[k][0][y]);
              }
            }
          }
          console.log(this.drinkwater[7],this.utilwater[7]);


          this.wsourcechart = new Chart(this.wsourcecanvas.nativeElement, {
            type: "doughnut",
            data: {
              labels: ["Drinking Water", "Other Water", "Utility Water  "],
              datasets: [
                {
                  label: "# of Ltrs",
                  data: [
                    this.drinkwater[7], this.otherwater[7], this.utilwater[7]
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
                  data: [this.drinkwater[7]],
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
                  data: [this.utilwater[7]],
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
                  data: [this.otherwater[7]],
                  backgroundColor: ["rgba(75, 192, 192, 0.2)"],
                  hoverBackgroundColor: ["#FF6384"]
                }
              ]
            }
          });
          this.totalusage=0+this.otherwater[7] + this.drinkwater[7] + this.utilwater[7]

        });
      });
    });
  }
  sample() 
  {
    this.storage.get("token").then(val => {
      let token = val;
      this.storage.get("custid").then(val => {
        let url = "https://www.dbdwater.com/smartmeter_webapp/api/rest/meter/getUsageComparisonDataWithinGroupByCustomer/" + val;
        this.remoteService.getPosts(url, token).subscribe((data) => {
          this.response = data;
          console.log(data)});});});}
   




showChart(totalOfBudgetAndContingency: number, paidPercentage: number, remainingPercentageExcludingPaid: number, contingencyPercentage: number,
    spent: number, spentOnChart: number, remainingAmount: number, daysToGo: number, spentOverColor: string, chartId: string) {
    let chart = HighCharts.chart(chartId, {
      "chart": {
        "height": 400,
        "renderTo": "container",
        "plotBackgroundColor": null,
        "plotBackgroundImage": null,
        "plotBorderWidth": 0,
        "plotShadow": false,
        "backgroundColor": "white"
      },
      "credits": {
        "enabled": false
      },
      "tooltip": {
        "enabled": true
      },
      "title": {
        "useHtml": true,
        "text": "<div style=\"font-size: 1.6rem;\">Remaining</div><br/><div style=\"font-size: 20px;color:" + spentOverColor + "\">" + remainingAmount.toLocaleString() + "</div>",
        "align": "center",
        "verticalAlign": "top",
        "y": 120,
      },
      "subtitle": {
        "useHtml": true,
        "text": "<div style=\"font-size: 1.6rem;\">Days To Go</div><br/><div style=\"font-size: 16px;\">" + daysToGo + "</div>",
        "align": "center",
        "verticalAlign": "top",
        "y": 170,
      },
      "pane": {
        "center": ["50%", "47%"],
        "size": "70%",
        "startAngle": -90,
        "endAngle": 90,
        "background": {
          "borderWidth": 0,
          "backgroundColor": "transparent",
          "innerRadius": "95%",
          "outerRadius": "100%",
          "shape": "arc"
        }
      },
      "yAxis": [{
        "lineWidth": 0,
        "min": 0,
        "max": totalOfBudgetAndContingency, /* Budget + Contingency */
        tickColor: 'white',
        tickWidth: 4,
        minorTickInterval: 'auto',
        minorTickLength: 3,
        minorTickPosition: 'inside',
        tickPixelInterval: 50,
        tickPosition: '',
        tickPositioner: (min, max) => {
          var ticks = [],
            tick = min,
            step = Math.round((max - min) / 10);
          while (tick < max - step / 2) {
            ticks.push(Math.round(tick));
            tick += step;
          }
          ticks.push(Math.round(max));
          return ticks;
        },
        tickLength: 30,

        "labels": {
          "enabled": true,
          distance: 30,
          style: {
            color: '#50a2a7',
            font: '11px Trebuchet MS, Verdana, sans-serif'
          }
        },
        "title": {
          "text": "",
          "useHTML": false,
          "y": 80
        },
        "pane": 0
      }],
      "plotOptions": {
        "series": {
          "enableMouseTracking": false
        },
        "pie": {
          "dataLabels": {
            "enabled": true,
            "distance": 0,
            "style": {
              "fontWeight": "bold",
              "color": "white",
              "textShadow": "0px 1px 2px black"
            }
          },
          "size": "75%",
          "startAngle": -90,
          "endAngle": 90,
          "center": ["50%", "47%"]
        },
        "gauge": {
          "dataLabels": {
            "enabled": false
          },
          "pivot": {
            "radius": 80,
            "borderWidth": 1,
            "borderColor": "transparent",
            "backgroundColor": "white"
          },
          "dial": {
            "radius": "100%",
            "backgroundColor": "#e9b44c",
            "borderColor": "",
            "baseWidth": 60,
            "topWidth": 1,
            "baseLength": "5%",
            "rearLength": "5%"
          }
        }
      },

      "series": [{
        "type": "pie",
        "name": "Budget",
        "innerSize": "80%",
        "data": [{
          "y": paidPercentage, /* Paid as percentage */
          "name": "",
          color: 'rgba(80,162,167, 0.3)'
        }, {
          "y": remainingPercentageExcludingPaid, /* Remaining as percentage excluding paid */
          "name": "",
          color: 'rgba(187,187,187, 0.2)'
        }, {
          "y": contingencyPercentage, /* Contingency as percentage */
          "name": "",
          color: 'rgba(155,41,21, 0.9)'
        }]
      }, {
        "type": "gauge",
        "name": "Spent",
        "data": [spentOnChart], /* Spent */
        "dial": {
          "rearLength": 0
        }
      }],
    });
  }
    presentPopover(myEvent) {
        let popover = this.popoverCtrl.create(PopoverPageComponent);
      //{ myData: this.popoverCtrl.create(PopoverPageComponent)};
        popover.present({
            ev: myEvent
        });

    }

    ionViewDidLoad() {
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
      //  const location =new google.maps.LatLng('17.401941','78.471730');

        const options={
          center:location,
          zoom:10
        };
        // const map=new google.maps.Map(this.mapRef.nativeElement,options);
        }
}
