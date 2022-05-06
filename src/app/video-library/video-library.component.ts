import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Videos} from "../video";

import {ShowvideoService} from "../../servises/showvideo.service";

@Component({
  selector: 'app-video-library',
  templateUrl: './video-library.component.html',
  styleUrls: ['./video-library.component.scss']
})
export class VideoLibraryComponent implements OnInit, AfterViewInit {
  videoList: Videos[] = [];
  array: [] = [];
  sum = 0;
  scrollUpDistance = 2;

  constructor(public showVideoService: ShowvideoService) {
    this.appendItems(0, this.videoList.length);
    for (let i = 0; i < 2; i++) {
      this.loadNewVideo();
    }
  }

  ngOnInit(): void {
    this.showVideoService.getVideo().subscribe((videodata: any) => this.videoList = videodata["Videos"])
  }

  ngAfterViewInit(): void {

    document.addEventListener("scroll", () => {
      this.OnScroll();
    });
  }

  public OnScroll() {
    if (this.checkPosition()) {
      this.loadNewVideo();
    }

  }

  public checkPosition(): boolean {
    const height = document.body.offsetHeight
    const scrolled = window.scrollY
    const screenHeight = window.innerHeight
    const position = document.body.offsetTop
    return (height + position <= scrolled + screenHeight)
  }

  private videoLoad: number = 0;

  loadNewVideo(): void {
    if (this.videoLoad >= this.videoList.length) return;
    this.videoList = [...this.videoList, this.videoList[this.videoLoad]]
  }

  addVideo(startIndex: number, endIndex: number, _method: string) {
    for (let i = 0; i < this.sum; ++i) {
      //@ts-ignore
      this.array[_method]([this.videoList]);
    }

  }

  appendItems(startIndex: number, endIndex: number) {
    this.addVideo(startIndex, endIndex, "push");
  }

}
