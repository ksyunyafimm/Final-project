import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeVideoComponent } from './youtube-video.component';
import {YtPlayerAngularModule} from "yt-player-angular";
import {VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule} from "ngx-videogular";


@NgModule({
  declarations: [
    YoutubeVideoComponent
  ],
  exports: [
    YoutubeVideoComponent
  ],
    imports: [
        CommonModule,
        YtPlayerAngularModule,
        VgCoreModule,
      VgControlsModule,
      VgOverlayPlayModule,
      VgBufferingModule
    ]
})
export class YoutubeVideoModule { }
