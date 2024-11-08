import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { AllstuentsComponent } from './components/allstuents/allstuents.component';

const routes: Routes = [
  {
    path:"",
    component:DashboardComponent
  },
  {
    path:"subject/:subjectName",
    component:SubjectsComponent
  },{
    path:"allStudents",
    component:AllstuentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
