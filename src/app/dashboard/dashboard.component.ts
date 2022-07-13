import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvgTimeseries } from '../AvgTimeseries';
import { City } from '../City';
import { Timeseries } from '../Timeseries';
import { CitiesService } from '../services/cities.service';
import { Time } from '@angular/common';
import { timer } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { AvgNumerical } from '../AvgNumerical';
import { PeriodicData } from '../PeriodicData';
ActivatedRoute
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnChanges{

  cityId : number;
  city: City[];
  categoricaltime : PeriodicData[];
  numericaltime : PeriodicData[];
  overalltime : PeriodicData[];
  avgnumericaltime : AvgNumerical[];
  groupavgnumericaltime : AvgNumerical[];
  
  timeseries : Timeseries[];
  timeseriesstatic : Timeseries[];
  avgtimeseries: AvgTimeseries[];
  avgtimeseriesGrpRp : AvgTimeseries[];
  avgtimeseriesGrpWc : AvgTimeseries[];

  constructor(private activatedroute : ActivatedRoute, private citiesService : CitiesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }
 

  ngOnInit(): void {
    let url : any;
    url = this.activatedroute.snapshot.paramMap.get('id');
    if(url)
    this.cityId = parseInt(url)
    const myTimer = timer(0, 4000)
    myTimer
    .pipe(
      mergeMap( () => this.citiesService.getNumericalTimebyId(this.cityId) )
    )
    .subscribe(
      (responsedata) => (this.numericaltime = responsedata)
    );

    
    this.citiesService.getCitiesbyId(this.cityId).subscribe(
      (responsedata) => (this.city = responsedata)
      );

    this.citiesService.getAvgNumericalTimebyId(this.cityId).subscribe(
      (responsedata) => (this.avgnumericaltime = responsedata)
    );
    // this.citiesService.getNumericalTimebyId(this.cityId).subscribe(
    //   (responsedata) => (this.numericaltime = responsedata)
    // );
    this.citiesService.getCategoricalTimebyId(this.cityId).subscribe(
      (responsedata) => (this.categoricaltime = responsedata)
    );
    this.citiesService.getGroupAvgNumericalTimebyId(this.cityId).subscribe(
      (responsedata) => (this.groupavgnumericaltime = responsedata)
    );
    


    // this.citiesService.getTimeseriesbyId(this.cityId).subscribe(
    //   (responsedata) => (this.timeseriesstatic = responsedata)
    //   );
    // this.citiesService.getAvgTimeseriesbyId(this.cityId).subscribe(
    //   (responsedata) => (this.avgtimeseries = responsedata)
    //   );
    // this.citiesService.getAvgTimeseriesbyIdgrpRp(this.cityId).subscribe(
    //   (responsedata) => (this.avgtimeseriesGrpRp = responsedata)
    //   );
    // this.citiesService.getAvgTimeseriesbyIdgrpWc(this.cityId).subscribe(
    //   (responsedata) => (this.avgtimeseriesGrpWc = responsedata)
    //   );
         
  }

}
