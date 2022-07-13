import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

const routes: Routes = [
  {path: '', redirectTo: '/cities', pathMatch: 'full'},
  {path: 'cities', component: LandingpageComponent},
  {path: 'cities/:id', component: DashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
