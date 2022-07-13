import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels'
import { AvgTimeseries } from 'src/app/AvgTimeseries';

@Component({
  selector: 'app-avggroupbyrp',
  templateUrl: './avggroupbyrp.component.html',
  styleUrls: ['./avggroupbyrp.component.css']
})
export class AvggroupbyrpComponent implements OnInit, OnChanges {
  @Input() avggroupbyrp : AvgTimeseries[];
  switchY : string = 'avg_Skilled_Available'

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'>; 

  constructor() { }
  ngOnChanges(): void {
    let data: any[] = []
    let labelvar : string = ''

    if (this.switchY === 'avg_Skilled_Available'){
      labelvar ='Avg Skilled Available'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Skilled_Available], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Transportation_Cost')
    {     
      labelvar ='Avg Transportation Cost'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Transportation_Cost], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Vendors_Available')
    {
      labelvar ='Avg Vendors Available'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Vendors_Available], label: value.ts_Ruling_Party}
        return obj
      }
      )
    } 
    else if (this.switchY === 'avg_Labour_Cost')
    {
      labelvar ='Avg Labour Cost'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Labour_Cost], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Work_Rate')
    {
      labelvar ='Avg Work Rate'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Work_Rate], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }

    this.barChartData = {
      labels: [labelvar],
      datasets: data
    };
    
  }
  Switch(): void {

    let data: any[] = []
    let labelvar : string = ''

    if (this.switchY === 'avg_Skilled_Available'){
      labelvar ='Avg Skilled Available'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Skilled_Available], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Transportation_Cost')
    {
      labelvar ='Avg Transportation Cost'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Transportation_Cost], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Vendors_Available')
    {
      labelvar ='Avg Vendors Available'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Vendors_Available], label: value.ts_Ruling_Party}
        return obj
      }
      )
    } 
    else if (this.switchY === 'avg_Labour_Cost')
    {
      labelvar ='Avg Labour Cost'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Labour_Cost], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Work_Rate')
    {
      labelvar ='Avg Work Rate'
      data = this.avggroupbyrp.map((value) =>
      {
        let obj = { data : [value.avg_Work_Rate], label: value.ts_Ruling_Party}
        return obj
      }
      )
    }

    this.barChartData = {
      labels: [labelvar],
      datasets: data
    };
    
  }

  ngOnInit(): void {
    let data = this.avggroupbyrp.map((value) =>
    {
      let obj = { data : [value.avg_Skilled_Available], label: value.ts_Ruling_Party}
      return obj
    }
    )  
    this.barChartData = {
      labels: ['Avg Skilled Available'],
      datasets: data
    };
  }

}
