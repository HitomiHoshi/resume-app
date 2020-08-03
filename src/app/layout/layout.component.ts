import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  currentView = "about_me"
  constructor() { }

  links =[
    { path: 'about_me', name: 'About Me' },
    { path: 'education', name: 'Education' },
    { path: 'work-experience', name: 'Work Experience' },
    { path: 'skills', name: 'Skills and Ability' },
    { path: 'project', name: 'Project' },
    { path: 'curriculum', name: 'Curriculum' }
  ];

  ngOnInit(): void {
  }
  routeTo(view){
    this.currentView = view
  }
}
