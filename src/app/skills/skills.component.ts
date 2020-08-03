import { Component, OnInit } from '@angular/core';
import { SkillsService } from "./skills.service";

export interface Skill{
  title:string
  skill_info: Info[]
}

export interface Info{
  title:string
  percentage: number
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillList: Skill
  constructor(
    private skillsService: SkillsService
  ) { }

  ngOnInit(): void {
    this.skillsService.getSkillData().subscribe(resp => {
      this.skillList = resp
    })
  }

}
