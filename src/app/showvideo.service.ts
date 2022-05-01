import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowvideoService {

  public isShowVideo: boolean = false
  public videoId :HTMLElement = document.getElementById('')

  public open(): void {

    this.isShowVideo = true
  }
}
