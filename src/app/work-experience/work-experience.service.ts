import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(
    private http: HttpClient,
  ) { }

  getExperienceData(): any {
    return this.http.get('assets/json/work-experience-data.json');
  }
}
