import { Component } from '@angular/core';
import {ShowvideoService} from "./showvideo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public showVideoService: ShowvideoService) {
  }
}

