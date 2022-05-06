import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ShowvideoService {
  constructor(private httpClient:HttpClient) {
  }

  getVideo() {
    return this.httpClient.get('assets/video.json')}

  public isShowVideo: boolean = false
  public open(): void {
    this.isShowVideo = true
  }
  public close(): void{
    this.isShowVideo = false
  }
}
