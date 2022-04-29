import { Component, OnInit } from '@angular/core';
import { YtPlayerService, PlayerOptions } from 'yt-player-angular';
@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss']
})
export class YoutubeVideoComponent {

  constructor(private ytPlayerService: YtPlayerService ) { }


}
