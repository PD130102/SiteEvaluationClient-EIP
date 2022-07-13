import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Timeseries } from 'src/app/Timeseries';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts'
import { PeriodicData } from 'src/app/PeriodicData';

@Component({
  selector: 'app-versustimeseries',
  templateUrl: './versustimeseries.component.html',
  styleUrls: ['./versustimeseries.component.css']
})
export class VersustimeseriesComponent implements OnInit , OnChanges {
  // @Input() timeseries : Timeseries[];
  @Input() numericalTime : PeriodicData[];


  switchY : string

  switchlist : string[]
  
  public lineChartData: ChartConfiguration['data'];

  public lineChartOptions: ChartConfiguration['options'] = {
    animation: {
      duration: 0
    }
  };

  public lineChartType: ChartType = 'line';


  constructor() { }
  ngOnChanges(): void {
    let data =  this.numericalTime.filter((value) => (value.category === this.switchY)).map((value) => <number>(value.value))

    let intervals = this.numericalTime.filter((value) => (value.category === this.switchY)).map((value) => {
      let d = new Date(value.timePeriod.split('T')[0]);
      const monthNames = [
        "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
      ];
      let datestring = monthNames[d.getMonth()] + ", " + `${d.getFullYear()}`;   
      return datestring;
    })

    this.lineChartData = {
      datasets: [
        {
          data: data,
          label: this.switchY,
          // backgroundColor: `rgba(${r}, ${g}, ${b},0.3)`,
          // borderColor: `rgb(${r}, ${g}, ${b})`,
          fill: 'origin',
        }
      ],
      labels: intervals
    };
  }


  Switch(): void {
  

    let data =  this.numericalTime.filter((value) => (value.category === this.switchY)).map((value) => <number>(value.value))

    let intervals = this.numericalTime.filter((value) => (value.category === this.switchY)).map((value) => {
      let d = new Date(value.timePeriod.split('T')[0]);
      const monthNames = [
        "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
      ];
      let datestring = monthNames[d.getMonth()] + ", " + `${d.getFullYear()}`;   
      return datestring;
    })

    this.lineChartData = {
      datasets: [
        {
          data: data,
          label: this.switchY,
          // backgroundColor: `rgba(${r}, ${g}, ${b},0.3)`,
          // borderColor: `rgb(${r}, ${g}, ${b})`,
          fill: 'origin',
        }
      ],
      labels: intervals
    };
    
  }

  ngOnInit(): void {
    this.switchlist = this.numericalTime.map((value) => value.category).filter((value, index, self) => self.indexOf(value) === index)
    this.switchY = this.switchlist[0]
    let intervals = this.numericalTime.filter((value) => (value.category === this.switchY)).map((value) => {
      let d = new Date(value.timePeriod.split('T')[0]);
      const monthNames = [
        "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"
      ];
      let datestring = monthNames[d.getMonth()] + ", " + `${d.getFullYear()}`;   
      return datestring;
    })
    let data =  this.numericalTime.filter((value) => (value.category === this.switchY)).map((value) => <number>(value.value))
    this.lineChartData = {
      datasets: [
        {
          data: data,
          label: 'Skilled Available',
          fill: 'origin',
        }
      ],
      labels: intervals
    };
  }

}
