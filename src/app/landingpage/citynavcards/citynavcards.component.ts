import { Component, OnInit, Input } from '@angular/core';
import { City } from '../../City';
import { Router } from '@angular/router';

@Component({
  selector: 'app-citynavcards',
  templateUrl: './citynavcards.component.html',
  styleUrls: ['./citynavcards.component.css']
})
export class CitynavcardsComponent implements OnInit {
  @Input() city: City;
  // completedprojects : number;

  constructor(private router : Router) { }
  ngOnInit(): void {
    console.log(this.city)
    // this.completedprojects = this.city.completedOntime + this.city.completedLate;
    // console.log(this.completedprojects)
  }
  onClick(Id : number) {
    this.router.navigate(['/cities',Id]);
  }
}
