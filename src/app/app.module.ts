import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SubjectsComponent } from './components/subjects/subjects.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AllstuentsComponent } from './components/allstuents/allstuents.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';  // Import MatListModule
import { MatCardModule } from '@angular/material/card';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectsComponent,
    DashboardComponent,
    AllstuentsComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,MatButtonModule,MatToolbarModule,HttpClientModule,
    RouterModule,
    MatListModule,
    MatCardModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
