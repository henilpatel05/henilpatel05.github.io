import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  faArrowRight = faArrowRight;
  // constructor(public router:Router) { }

  constructor(public router:Router, private titleService: Title, private metaService: Meta) { }

  ngOnInit() {
    const pageTitle = 'Henil Kajavadra | Human Experience Designer';
    const metaDescription = 'I am a versatile UX Designer driving innovation through user-centered design & delivering accessible human experience.';
  
    this.titleService.setTitle(pageTitle);
    this.metaService.updateTag({ name: 'description', content: metaDescription });
  }
}
