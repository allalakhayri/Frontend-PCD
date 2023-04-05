import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  private predictUrl='http://localhost:5000'
  constructor(private http: HttpClient) {}

  // add a method to send form data to the Flask backend
  sendForm(formValue: any):Observable<any> {
    console.log(formValue); 
    return this.http.post<any>(this.predictUrl, formValue);
  }
}



