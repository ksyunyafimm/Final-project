import { Component, OnInit } from '@angular/core';
import {YtPlayerService, PlayerOptions, StateChange, StateChangeType} from 'yt-player-angular';
@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent {

  constructor(private ytPlayerService: YtPlayerService) {
  }
 public onClickPlay(): void{
    this.ytPlayerService.play()
 }
  public onStateChange(stateChange: StateChange): void {
    console.log(`Type: ${StateChangeType[stateChange.type]} || Payload: ${stateChange.payload}`);
  }
}
