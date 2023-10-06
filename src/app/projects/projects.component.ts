import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  faArrowRight = faArrowRight;

  constructor(public router:Router, private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    const pageTitle = 'Projects | UX Design';
    const metaDescription = 'I am a versatile UX Designer driving innovation through user-centered design & delivering accessible human experience.';
  
    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });
  }

}
