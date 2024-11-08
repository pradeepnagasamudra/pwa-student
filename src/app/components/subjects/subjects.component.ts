import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { StudentsServiceService } from '../../services/students-service.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent {

	studentsData: any;
	topper: any = {
		name: "",
		marks: Number.MIN_SAFE_INTEGER
	};

  constructor(
		private route: ActivatedRoute,
		private studentsService: StudentsServiceService
	) {

		this.route.params.pipe(switchMap(
			(res: any) => this.studentsService.getSubjectData(res?.subjectName)
		)).subscribe(
			(res: any) => {
				this.studentsData = res;
				this.updateTopper();
			}
		);
  }

  updateTopper() {
		for (let i = 0 ; i< this.studentsData.length; i++) {
			if (this.topper.marks < this.studentsData[i].marks) {
				this.topper = this.studentsData[i];
			}
		}
	}
}
