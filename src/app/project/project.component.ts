import { Component, OnInit } from '@angular/core';
import { ProjectService } from "./project.service";

export interface Project{
  title:string
  under:string
  description:string
  link: string
  code:string
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectList:Project

  constructor(
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    this.projectService.getProjectData().subscribe(resp => {
      this.projectList = resp
    })
  }

  openLink(link){
    window.open(link)
  }
}
