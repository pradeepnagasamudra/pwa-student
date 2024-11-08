import { Component } from '@angular/core';
import { StudentsServiceService } from '../../services/students-service.service';

@Component({
  selector: 'app-allstuents',
  templateUrl: './allstuents.component.html',
  styleUrls: ['./allstuents.component.scss']
})
export class AllstuentsComponent {
  students: any = [{name:"a"}, {name: "b"}];

  constructor(
    private studentsService: StudentsServiceService
  ) {
    this.studentsService.getAllStudents().subscribe(
      (res: any) => {
        this.students = res;
      }
    );
  }
}
