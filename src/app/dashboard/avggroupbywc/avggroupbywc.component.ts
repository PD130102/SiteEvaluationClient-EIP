// import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
// import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
// import { BaseChartDirective } from 'ng2-charts';
// import DataLabelsPlugin from 'chartjs-plugin-datalabels'
// import { AvgTimeseries } from 'src/app/AvgTimeseries';
// @Component({
//   selector: 'app-avggroupbywc',
//   templateUrl: './avggroupbywc.component.html',
//   styleUrls: ['./avggroupbywc.component.css']
// })
// export class AvggroupbywcComponent implements OnInit {
//   @Input() avggroupbywc:any;
//   switchY : string = 'avg_Labour_Cost';

//   public barChartOptions: ChartConfiguration['options'] = {
//     responsive: true,
//     // We use these empty structures as placeholders for dynamic theming.
//     scales: {
//     },
//     plugins: {
//       legend: {
//         display: true,
//       },
//       datalabels: {
//         anchor: 'end',
//         align: 'end'
//       }
//     }
//   };
//   public barChartType: ChartType = 'bar';

//   public barChartData: ChartData<'bar'>; 

//   constructor() { }
//   // ngOnChanges(): void {
//   //   let data: any[] = []
//   //   let labelvar : string = ''

//   //   if (this.switchY === 'avg_Skilled_Available'){
//   //     labelvar ='Avg Skilled Available'
//   //     data = this.avggroupbywc.map((value) =>
//   //     {
//   //       let obj = { data : [value.avg_Skilled_Available], label: value.ts_Weather_Condition}
//   //       return obj
//   //     }
//   //     )
//   //   }
//   //   else if (this.switchY === 'avg_Transportation_Cost')
//   //   {
//   //     labelvar ='Avg Transportation Cost'
//   //     data = this.avggroupbywc.map((value) =>
//   //     {
//   //       let obj = { data : [value.avg_Transportation_Cost], label: value.ts_Weather_Condition}
//   //       return obj
//   //     }
//   //     )
//   //   }
//   //   else if (this.switchY === 'avg_Vendors_Available')
//   //   {
//   //     labelvar ='Avg Vendors Available'
//   //     data = this.avggroupbywc.map((value) =>
//   //     {
//   //       let obj = { data : [value.avg_Vendors_Available], label: value.ts_Weather_Condition}
//   //       return obj
//   //     }
//   //     )
//   //   } 
//   //   else if (this.switchY === 'avg_Labour_Cost')
//   //   {
//   //     labelvar ='Avg Labour Cost'
//   //     data = this.avggroupbywc.map((value) =>
//   //     {
//   //       let obj = { data : [value.avg_Labour_Cost], label: value.ts_Weather_Condition}
//   //       return obj
//   //     }
//   //     )
//   //   }
//   //   else if (this.switchY === 'avg_Work_Rate')
//   //   {
//   //     labelvar ='Avg Work Rate'
//   //     data = this.avggroupbywc.map((value) =>
//   //     {
//   //       let obj = { data : [value.avg_Work_Rate], label: value.ts_Weather_Condition}
//   //       return obj
//   //     }
//   //     )
//   //   }

//   //   this.barChartData = {
//   //     labels: [labelvar],
//   //     datasets: data
//   //   };
    
//   // }
//   Switch(): void {

//     let data: any[] = []
//     let labelvar : string = ''

//     if (this.switchY === 'avg_Skilled_Available'){
//       labelvar ='Avg Skilled Available'
//       data = this.avggroupbywc.map((value:any) =>
//       {
//         let obj = { data : [value.avg_Skilled_Available], label: value.ts_Weather_Condition}
//         return obj
//       }
//       )
//     }
//     else if (this.switchY === 'avg_Transportation_Cost')
//     {
//       labelvar ='Avg Transportation Cost'
//       data = this.avggroupbywc.map((value:any) =>
//       {
//         let obj = { data : [value.avg_Transportation_Cost], label: value.ts_Weather_Condition}
//         return obj
//       }
//       )
//     }
//     else if (this.switchY === 'avg_Vendors_Available')
//     {
//       labelvar ='Avg Vendors Available'
//       data = this.avggroupbywc.map((value:any) =>
//       {
//         let obj = { data : [value.avg_Vendors_Available], label: value.ts_Weather_Condition}
//         return obj
//       }
//       )
//     } 
//     else if (this.switchY === 'avg_Labour_Cost')
//     {
//       labelvar ='Avg Labour Cost'
//       data = this.avggroupbywc.map((value:any) =>
//       {
//         let obj = { data : [value.avg_Labour_Cost], label: value.ts_Weather_Condition}
//         return obj
//       }
//       )
//     }
//     else if (this.switchY === 'avg_Work_Rate')
//     {
//       labelvar ='Avg Work Rate'
//       data = this.avggroupbywc.map((value:any) =>
//       {
//         let obj = { data : [value.avg_Work_Rate], label: value.ts_Weather_Condition}
//         return obj
//       }
//       )
//     }

//     this.barChartData = {
//       labels: [labelvar],
//       datasets: data
//     };
    
//   }

//   ngOnInit(): void {
//     if(this.avggroupbywc==undefined)
//     {
//       console.log("Data not defined");
//       return;
//     }
//     let data = this.avggroupbywc.map((value:any) =>
//     {
//       let obj = { data : [value.avg_Labour_Cost], label: value.ts_Weather_Condition}
//       return obj
//     }
    
//     );
//     console.log(data);  
//     this.barChartData = {
//       labels: ['Avg Labour Cost'],
//       datasets: data
//     };
//   }

// }

import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels'
import { AvgTimeseries } from 'src/app/AvgTimeseries';
import { CitiesService } from 'src/app/services/cities.service';
@Component({
  selector: 'app-avggroupbywc',
  templateUrl: './avggroupbywc.component.html',
  styleUrls: ['./avggroupbywc.component.css']
})
export class AvggroupbywcComponent implements OnInit {
  avggroupbywc:any;
  switchY : string = 'avg_Labour_Cost';
  cityId : number;

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

  constructor(private activatedroute : ActivatedRoute,private citiesService : CitiesService) { }
  Switch(): void {

    let data: any[] = []
    let labelvar : string = ''

    if (this.switchY === 'avg_Skilled_Available'){
      labelvar ='Avg Skilled Available'
      data = this.avggroupbywc.map((value:any) =>
      {
        let obj = { data : [value.avg_Skilled_Available], label: value.ts_Weather_Condition}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Transportation_Cost')
    {
      labelvar ='Avg Transportation Cost'
      data = this.avggroupbywc.map((value:any) =>
      {
        let obj = { data : [value.avg_Transportation_Cost], label: value.ts_Weather_Condition}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Vendors_Available')
    {
      labelvar ='Avg Vendors Available'
      data = this.avggroupbywc.map((value:any) =>
      {
        let obj = { data : [value.avg_Vendors_Available], label: value.ts_Weather_Condition}
        return obj
      }
      )
    } 
    else if (this.switchY === 'avg_Labour_Cost')
    {
      labelvar ='Avg Labour Cost'
      data = this.avggroupbywc.map((value:any) =>
      {
        let obj = { data : [value.avg_Labour_Cost], label: value.ts_Weather_Condition}
        return obj
      }
      )
    }
    else if (this.switchY === 'avg_Work_Rate')
    {
      labelvar ='Avg Work Rate'
      data = this.avggroupbywc.map((value:any) =>
      {
        let obj = { data : [value.avg_Work_Rate], label: value.ts_Weather_Condition}
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
    let url : any;
    url = this.activatedroute.snapshot.paramMap.get('id');
    if(url)
    this.cityId = parseInt(url)

    this.citiesService.getAvgTimeseriesbyIdgrpWc(this.cityId).subscribe(
      (responsedata) => (this.avggroupbywc = responsedata) );

    console.log('lol')
    console.log(this.avggroupbywc)
    console.log('lol')


    if(this.avggroupbywc==undefined)
    {
      console.log("Data not defined");
      return;
    }
    let data = this.avggroupbywc.map((value:any) =>
    {
      let obj = { data : [value.avg_Labour_Cost], label: value.ts_Weather_Condition}
      return obj
    }
    
    );
    console.log(data);  
    this.barChartData = {
      labels: ['Avg Labour Cost'],
      datasets: data
    };
  }

}