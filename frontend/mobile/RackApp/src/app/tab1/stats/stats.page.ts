import { Component, OnInit, Type } from '@angular/core';

import { Chart } from 'chart.js';
import { UserService } from 'src/app/services/user.service';
import { RackService } from 'src/app/services/rack.service';
import { Irack } from 'src/app/interfaces/irack';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit {

  userRack!:Irack[];
//is there a way to condense this?
  sumSpring!:number;
  sumSummer!:number;
  sumFall!:number;
  sumWinter!:number;

  itemS:string = "items";
  itemSu:string = "items";
  itemF:string = "items";
  itemW:string = "items";

  constructor(public userService:UserService, public rackService:RackService) { 
  }


  ngOnInit() {
    this.rackService.getUserRack().subscribe(res => {
      this.userRack = Object.values(res);
    });

    this.rackService.getUserSpring().subscribe(res => {
      this.sumSpring = Object.values(res).length;
      if (this.sumSpring == 1){
        this.itemS = "item"
      };
    });

    this.rackService.getUserSummer().subscribe(res => {
      this.sumSummer = Object.values(res).length;
      if (this.sumSummer == 1){
        this.itemSu = "item"
      };
    });

    this.rackService.getUserFall().subscribe(res => {
      this.sumFall = Object.values(res).length;
      if (this.sumFall == 1){
        this.itemF = "item"
      };
    });

    this.rackService.getUserWinter().subscribe(res => {
      this.sumWinter = Object.values(res).length;
      if (this.sumWinter == 1){
        this.itemW = "item"
      };
    });

  }
  

}


// Reference Code:
//
// import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
// import { Chart } from 'chart.js';

// export class HomePage implements AfterViewInit {
//   // Importing ViewChild. We need @ViewChild decorator to get a reference to the local variable 
//   // that we have added to the canvas element in the HTML template.
//   @ViewChild('barCanvas') private barCanvas: ElementRef;
//   @ViewChild('doughnutCanvas') private doughnutCanvas: ElementRef;
//   @ViewChild('lineCanvas') private lineCanvas: ElementRef;

//   barChart: any;
//   doughnutChart: any;
//   lineChart: any;

//   constructor() { }

//   // When we try to call our chart to initialize methods in ngOnInit() it shows an error nativeElement of undefined. 
//   // So, we need to call all chart methods in ngAfterViewInit() where @ViewChild and @ViewChildren will be resolved.
//   ngAfterViewInit() {
//     this.barChartMethod();
//     this.doughnutChartMethod();
//     this.lineChartMethod();
//   }

//   barChartMethod() {
//     // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
//     this.barChart = new Chart(this.barCanvas.nativeElement, {
//       type: 'bar',
//       data: {
//         labels: ['BJP', 'INC', 'AAP', 'CPI', 'CPI-M', 'NCP'],
//         datasets: [{
//           label: '# of Votes',
//           data: [200, 50, 30, 15, 20, 34],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255,99,132,1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//       },
//       options: {
//         scales: {
//           yAxes: [{
//             ticks: {
//               beginAtZero: true
//             }
//           }]
//         }
//       }
//     });
//   }

//   doughnutChartMethod() {
//     this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
//       type: 'doughnut',
//       data: {
//         labels: ['BJP', 'Congress', 'AAP', 'CPM', 'SP'],
//         datasets: [{
//           label: '# of Votes',
//           data: [50, 29, 15, 10, 7],
//           backgroundColor: [
//             'rgba(255, 159, 64, 0.2)',
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)'
//           ],
//           hoverBackgroundColor: [
//             '#FFCE56',
//             '#FF6384',
//             '#36A2EB',
//             '#FFCE56',
//             '#FF6384'
//           ]
//         }]
//       }
//     });
//   }

//   lineChartMethod() {
//     this.lineChart = new Chart(this.lineCanvas.nativeElement, {
//       type: 'line',
//       data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
//         datasets: [
//           {
//             label: 'Sell per week',
//             fill: false,
//             lineTension: 0.1,
//             backgroundColor: 'rgba(75,192,192,0.4)',
//             borderColor: 'rgba(75,192,192,1)',
//             borderCapStyle: 'butt',
//             borderDash: [],
//             borderDashOffset: 0.0,
//             borderJoinStyle: 'miter',
//             pointBorderColor: 'rgba(75,192,192,1)',
//             pointBackgroundColor: '#fff',
//             pointBorderWidth: 1,
//             pointHoverRadius: 5,
//             pointHoverBackgroundColor: 'rgba(75,192,192,1)',
//             pointHoverBorderColor: 'rgba(220,220,220,1)',
//             pointHoverBorderWidth: 2,
//             pointRadius: 1,
//             pointHitRadius: 10,
//             data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
//             spanGaps: false,
//           }
//         ]
//       }
//     });
//   }
// }