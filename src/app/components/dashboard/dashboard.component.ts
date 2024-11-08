import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StudentsServiceService } from '../../services/students-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  teachersProfile: any;
  
	constructor(
		private studentsService: StudentsServiceService
	) {
		this.studentsService.getTeachersProfile().subscribe(
			(res: any) => {
				this.teachersProfile = res;
			}
		);
	}
}
