import { Component, OnInit } from '@angular/core';
import { CurriculumService } from "./curriculum.service";
@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  curriculumList
  constructor(
    private curriculumService: CurriculumService
  ) { }

  ngOnInit(): void {
    this.curriculumService.getCurriculumData().subscribe(resp => {
      this.curriculumList = resp
    })
  }

}
