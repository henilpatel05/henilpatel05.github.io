import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faDribbble} from '@fortawesome/free-brands-svg-icons';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faFaceSmile} from '@fortawesome/free-regular-svg-icons';
import {faWindowRestore} from '@fortawesome/free-regular-svg-icons';
import {faFileLines} from '@fortawesome/free-regular-svg-icons';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My App';

  faLinkedinIn = faLinkedinIn;
  faDribbble = faDribbble;
  faPaperPlane = faPaperPlane;
  faFaceSmile = faFaceSmile;
  faWindowRestore = faWindowRestore;
  faFileLines = faFileLines;
  faArrowRight = faArrowRight;

  constructor(public router:Router) { }
  shouldShowFooter() {
    // Replace '/specific-url' with the actual specific URL you want to show the footer on.
    return this.router.url === '/projects' || this.router.url === '/';
  }
}
