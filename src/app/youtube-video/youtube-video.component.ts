import { Component, OnInit } from '@angular/core';
import {YtPlayerService, PlayerOptions, StateChange, StateChangeType} from 'yt-player-angular';
import {ShowvideoService} from "../showvideo.service";
@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent {

  constructor(private ytPlayerService: YtPlayerService,
              private showVideoService: ShowvideoService) {
  }
 // public onClickPlay(): void{
 //    this.ytPlayerService.play()
 // }
  // public onStateChange(stateChange: StateChange): void {
  //   console.log(`Type: ${StateChangeType[stateChange.type]} || Payload: ${stateChange.payload}`);
  // }
  src: any;

  public onClickShowVideo(): void{
    this.showVideoService.open()
  }

}
