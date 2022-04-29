import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from './youtube-video.component';
import {YtPlayerAngularModule} from "yt-player-angular";


@NgModule({
  declarations: [
    YoutubeVideoComponent
  ],
  exports: [
    YoutubeVideoComponent
  ],
    imports: [
        CommonModule,
        YtPlayerAngularModule
    ]
})
export class YoutubeVideoModule { }
