import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor(
    private http: HttpClient,
  ) { }

  getSkillData(): any {
    return this.http.get('assets/json/skill-data.json');
  }
}
