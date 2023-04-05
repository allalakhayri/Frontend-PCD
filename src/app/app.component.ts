import { Component } from '@angular/core';
import {FormService} from './form-service.service'
import { HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private formService: FormService) {}

  formData = {
    gender: '',
    marital_status: '',
    age: '',
    scholarship: '',
    mother_qualification: '',
    mother_occupation: '',
    father_occupation: '',
    inflation_rate: '',
    previous_qualifcation: '',
    course: '',
    curricular_units_1st_sem_without_evaluations: '',
    curricular_units_1st_sem_approved: '',
    curricular_units_1st_sem_credited: '',
    curricular_units_1st_sem_with_evaluations: '',
    curricular_units_2nd_sem_without_evaluations: '',
    curricular_units_2nd_sem_approved: '',
    curricular_units_2nd_sem_credited: '',
    curricular_units_2nd_sem_with_evaluations: ''
  };

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5000'
      })
    };
    // send the form data to the Flask backend using the FormService
    this.formService.sendForm(this.formData).subscribe((response: any) => {
      console.log(response);
      // handle the response from the server here
      if (response.enrolled) {
        // do something if the student is enrolled
      } else {
        // do something else if the student is not enrolled
      }
    }, error => {
      console.log(error);
      // handle the error here
    });
  }

}
