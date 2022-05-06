import {Component} from '@angular/core';
import {ShowvideoService} from "../servises/showvideo.service";
import {ShowService} from "../servises/show.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public showVideoService: ShowvideoService,
              public showService: ShowService) {
  }

  ngOnInit(): void {

  }

  public onClickShowVideo(): void {
    this.showVideoService.open()

  }

  public onClickShowComponent(): void {
    this.showService.openComponent()
  }

  public onDblClick(): void {
    this.showService.closeComponent()
  }
}

