import { Component, Input, OnInit, AfterViewInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Timeseries } from 'src/app/Timeseries';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { PeriodicData } from 'src/app/PeriodicData';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  timeseries : any[] = [];
  @Input() categoricaltime : PeriodicData[];
  @Input() numericaltime : PeriodicData[];
  overalltime : PeriodicData[];
  
  displayedColumns: string[];
  dataSource : MatTableDataSource<any>;

  constructor(private _liveAnnouncer: LiveAnnouncer) {}
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.dataSource = new MatTableDataSource(this.timeseries);
    
  // }

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {

    if (sortState.direction) {
      // this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      // this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.overalltime = this.categoricaltime.concat(this.numericaltime);
    this.displayedColumns = ['Time Period']
    this.overalltime.map((value) => value.category).filter((value, index, self) => self.indexOf(value) === index).map((value) => this.displayedColumns.push(value));
    
    this.overalltime.map((value) => (value.timePeriod)).filter((value, index, self) => self.indexOf(value) === index).map(
      (value) => {
        let timecol = <any>{};
        timecol['Time Period'] = value.split("T")[0];
        this.overalltime.filter((value2) => value2.timePeriod === value).map((value2) => {
          timecol[value2.category] = value2.value;
          // console.log(timecol);
        })
        this.timeseries.push(timecol);
      })
      // console.log(this.timeseries)

    this.dataSource = new MatTableDataSource(this.timeseries);
  }

}
