import { Component, OnInit } from '@angular/core';

declare var require: any;
const FileSaver = require('file-saver');

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  downloadResume(){
    FileSaver.saveAs("./assets/file/resume_NurShahidatulAdani.pdf", "resume", true);
  }
}
