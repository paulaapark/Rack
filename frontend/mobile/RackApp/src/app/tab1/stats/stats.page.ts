import { Component, OnInit, AfterViewInit  } from '@angular/core';

import { UserService } from 'src/app/services/user.service';
import { RackService } from 'src/app/services/rack.service';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.page.html',
  styleUrls: ['./stats.page.scss'],
})
export class StatsPage implements OnInit   {
  // @ViewChild('barCanvas') public barCanvas!: ElementRef;
  // @ViewChild('doughnutCanvas') public doughnutCanvas!: ElementRef;

  userRack!:any;
  //is there a way to condense this?
  sumSpring!: number;
  sumSummer!: number;
  sumFall!: number;
  sumWinter!: number;
  sumTops!:number;
  sumBottoms!:number;

  itemS: string = "items";
  itemSu: string = "items";
  itemF: string = "items";
  itemW: string = "items";
  topsG: string = "tops";
  bottomsG: string = "bottoms";


  public doughnutChartLabels!: string[];

  public barChartData!: ChartConfiguration<'bar'>['data']; 
  public doughnutChartData!: ChartConfiguration<'doughnut'>['data']['datasets'];


  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  public doughnutChartOptions: ChartConfiguration<'doughnut'>['options'] = {
    responsive: false
  };

  constructor(public userService: UserService, public rackService: RackService) {
  
  }


  ngOnInit() {
    this.rackService.getUserRack().subscribe(res => {
      this.userRack = Object.values(res);
    });

    this.rackService.getUserSpring().subscribe(res => {
      this.sumSpring = Object.values(res).length;
      if (this.sumSpring == 1) {
        this.itemS = "item"
      };
    });

    this.rackService.getUserSummer().subscribe(res => {
      this.sumSummer = Object.values(res).length;
      if (this.sumSummer == 1) {
        this.itemSu = "item"
      };
    });

    this.rackService.getUserFall().subscribe(res => {
      this.sumFall = Object.values(res).length;
      if (this.sumFall == 1) {
        this.itemF = "item"
      };
    });

    this.rackService.getUserWinter().subscribe(res => {
      this.sumWinter = Object.values(res).length;
      if (this.sumWinter == 1) {
        this.itemW = "item"
      };
    });

    this.rackService.getUserTops().subscribe(res => {
      this.sumTops = Object.values(res).length;
      if (this.sumTops == 1) {
        this.topsG = "top"
      };
    })

    this.rackService.getUserBottoms().subscribe(res => {
      this.sumBottoms = Object.values(res).length;
      if (this.sumBottoms == 1) {
        this.bottomsG = "bottom"
      };
    })

    
    // this.doughnutChartMethod();
    // this.barChartMethod();
  }

  ionViewDidEnter(){
    this.barChartData = {
      labels: [ 'Spring', 'Summer', 'Fall', 'Winter'],
      datasets: [
        { data: [ this.sumSpring, this.sumSummer, this.sumFall, this.sumWinter ], label: 'Current Seasonal Clothing Spread' }
      ]
    };
    this.doughnutChartLabels = ['Tops', 'Bottoms'];

    this.doughnutChartData = [
      { data: [ this.sumTops, this.sumBottoms ], label: 'Current Proportion of Tops vs Bottoms' }
    ];
  }
  // barChartMethod() {
  //   // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
  //   this.barChart = new Chart(this.barCanvas.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Spring', 'Summer', 'Fall', 'Winter'],
  //       datasets: [{
  //         label: '# of Seasonal Clothes',
  //         data: [this.sumSpring, this.sumSummer, this.sumFall, this.sumWinter],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       }]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           ticks: {
  //             // beginAtZero: true
  //           }
  //         }
  //       }
  //     }
  //   });
  // }

  // doughnutChartMethod() {
  //   this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
  //     type: 'doughnut',
  //     data: {
  //       labels: ['Tops', 'Bottoms'],
  //       datasets: [{
  //         label: 'Proportion of Clothing Types',
  //         data: [this.sumTops, this.sumBottoms],
  //         backgroundColor: [
  //           'rgba(255, 159, 64, 0.2)',
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)'
  //         ],
  //         hoverBackgroundColor: [
  //           '#FFCE56',
  //           '#FF6384',
  //           '#36A2EB',
  //           '#FFCE56',
  //           '#FF6384'
  //         ]
  //       }]
  //     }
  //   });
  // }

}