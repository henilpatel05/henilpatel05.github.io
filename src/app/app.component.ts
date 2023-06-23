import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faDribbble} from '@fortawesome/free-brands-svg-icons';
import {faPaperPlane} from '@fortawesome/free-regular-svg-icons';
import {faFaceSmile} from '@fortawesome/free-regular-svg-icons';
import {faWindowRestore} from '@fortawesome/free-regular-svg-icons';
import {faFileLines} from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Henil Kajavadra';

  faLinkedinIn = faLinkedinIn;
  faDribbble = faDribbble;
  faPaperPlane = faPaperPlane;
  faFaceSmile = faFaceSmile;
  faWindowRestore = faWindowRestore;
  faFileLines = faFileLines;

  constructor(public router:Router) { }

}
