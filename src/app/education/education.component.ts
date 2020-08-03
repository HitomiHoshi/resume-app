import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EducationService } from "./education.service";

export interface Education{
  range: string;
  school: string;
  cgpa: number;
  additional: string;
  description:string;
  programme:string;
  speciality:string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  educationDisplayColumn: string[] = [
    'range', 
    'school', 
    'programme'
  ]

  educationList: MatTableDataSource<Education>;
  
  constructor(
    private educationService:EducationService
  ) { }

  ngOnInit(): void {
    this.educationService.getEducationData().subscribe(resp => {
      console.log(resp)

      this.educationList = new MatTableDataSource<Education>(resp)
    })
  }

}
