import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsServiceService {

  constructor(
		private http: HttpClient
	){}

	getTeachersProfile(): Observable<any>	{
		return this.http.get("http://localhost:3000/teacherProfile");
	}

	getSubjectData(subjectName: string): Observable<any> {
		return this.http.get("http://localhost:3000/"+subjectName);
	}

	getAllStudents(): Observable<any> {
		
		return this.http.get("http://localhost:3000/allStudents");
	}
}
