import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  constructor(
    private http: HttpClient,
  ) { }

  getEducationData(): any {
    return this.http.get('assets/json/education-data.json');
  }
}
