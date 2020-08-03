import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(
    private http: HttpClient,
  ) { }

  getCurriculumData(): any {
    return this.http.get('assets/json/extra-curriculum-data.json');
  }
}
