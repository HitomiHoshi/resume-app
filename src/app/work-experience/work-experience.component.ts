import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { WorkExperienceService } from "./work-experience.service";

export interface Experience{
  company: string;
  description: string;
  range: number;
  status: string;
  work_info:Info;
}

export interface Info{
  position: string;
  description: string;
}

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {

  experienceDisplayColumn: string[] = [
    'company', 
    'range', 
    'work_info'
  ]

  spans = [];

  experienceList: MatTableDataSource<Experience>;
  originalExperienceList

  constructor(
    private workExperienceService: WorkExperienceService
  ) { }

  ngOnInit(): void {
    this.workExperienceService.getExperienceData().subscribe(resp => {
      console.log(resp)

      this.originalExperienceList = resp

      this.experienceList = new MatTableDataSource<Experience>(this.getExperienceList())
      this.cacheSpan('company', d => d.company);
    })
  }

  cacheSpan(key, accessor) {
    for (let i = 0; i < this.experienceList.data.length;) {
      let currentValue = accessor(this.experienceList.data[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < this.experienceList.data.length; j++) {        
        if (currentValue != accessor(this.experienceList.data[j])) {
          break;
        }

        count++;
      } 

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }

  getExperienceList(){
    const temp = this.originalExperienceList.reduce((current, next) => {
      next.work_info.forEach(element => {
        current.push({
          company: next.company,
          description: next.description,
          range: next.range,
          status: next.status,
          work_info: element
        })
      });
      return current
    }, [])
    console.log("temp", temp)
    return temp
  }

  getRowSpan(col, index) {
    return this.spans[index] && this.spans[index][col];
  }
}
