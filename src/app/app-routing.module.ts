import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { CurriculumComponent } from './curriculum/curriculum.component';

const routes: Routes = [

  { path: '', redirectTo: 'about_me', pathMatch: 'full' },
  { path: 'about_me', component: AboutMeComponent },
  { path: 'education', component: EducationComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'project', component: ProjectComponent },
  { path: 'curriculum', component: CurriculumComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
