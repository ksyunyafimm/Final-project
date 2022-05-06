import { Component, OnInit } from '@angular/core';
import {CommentJson} from "../comments";
import {CommentsService} from "../../servises/comments.service";
import {BehaviorSubject, map, Observable} from "rxjs";
import {ShowvideoService} from "../../servises/showvideo.service";


@Component({
  selector: 'app-comments-library',
  templateUrl: './comments-library.component.html',
  styleUrls: ['./comments-library.component.scss']
})
export class CommentsLibraryComponent implements OnInit {

commentMap: CommentJson[]=[];

  constructor(private commentsService: CommentsService,
              public showVideoService: ShowvideoService) { }

  ngOnInit(): void {
    this.commentsService.getComment().subscribe((data:any)=>this.commentMap=data["comments"])
  }
public onClickCloseButton():void {

    this.showVideoService.close()


}
}
