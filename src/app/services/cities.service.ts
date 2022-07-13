import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../City';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { AvgTimeseries } from '../AvgTimeseries';
import { Timeseries } from '../Timeseries';
import { AvgNumerical } from '../AvgNumerical';
import { PeriodicData } from '../PeriodicData';
@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  private rootUrl = 'https://localhost:7210/api';

  constructor(private http: HttpClient) { }

  getCities() : Observable<City[]> {
    return this.http.get<City[]>(this.rootUrl+'/city')
  }
  getCitiesbyId( id: number ) : Observable<City[]> {
    return this.http.get<City[]>(this.rootUrl+`/city/${id}`)
  }
  
  getCategoricalTimebyId( id: number ) : Observable<PeriodicData[]> {
    return this.http.get<PeriodicData[]>(this.rootUrl+`/city/CategoricalTime/${id}`)
  }
  
  getNumericalTimebyId( id: number ) : Observable<PeriodicData[]> {
    return this.http.get<PeriodicData[]>(this.rootUrl+`/city/NumericalTime/${id}`)
  }
  
  getAvgNumericalTimebyId( id: number ) : Observable<AvgNumerical[]> {
    return this.http.get<AvgNumerical[]>(this.rootUrl+`/city/NumericalTime/Average/${id}`)
  }

  getGroupAvgNumericalTimebyId( id: number ) : Observable<AvgNumerical[]> {
    return this.http.get<AvgNumerical[]>(this.rootUrl+`/city/NumericalTime/Average/Group/${id}`)
  }

  getGroupAvgNumericalTimebyIdandRange( id: number , start: string, end: string ) : Observable<AvgNumerical[]> {
    
    return this.http.get<AvgNumerical[]>(this.rootUrl+`/city/NumericalTime/Average/Group/Range/${id}?start=${start}&end=${end}`)
  }



  
  getTimeseriesbyId( id: number ) : Observable<Timeseries[]> {
    return this.http.get<Timeseries[]>(this.rootUrl+`/timeseries/${id}`)
  }
  getAvgTimeseriesbyId( id: number ) : Observable<AvgTimeseries[]> {
    return this.http.get<AvgTimeseries[]>(this.rootUrl+`/timeseries/average/${id}`)
  }
  getAvgTimeseriesbyIdgrpRp( id: number ) : Observable<AvgTimeseries[]> {
    return this.http.get<AvgTimeseries[]>(this.rootUrl+`/timeseries/average/rulingparty/${id}`)
  }
  getAvgTimeseriesbyIdgrpWc( id: number ) : Observable<AvgTimeseries[]> {
    return this.http.get<AvgTimeseries[]>(this.rootUrl+`/timeseries/average/weathercondition/${id}`)
  }
}
