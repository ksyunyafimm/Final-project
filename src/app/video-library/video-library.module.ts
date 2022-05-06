import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VideoLibraryComponent} from './video-library.component';
import {CommentsLibraryModule} from "../comments-library/comments-library.module";
import {PlaceCommentModule} from "../place-comment/place-comment.module";


@NgModule({
  declarations: [
    VideoLibraryComponent
  ],
  exports: [
    VideoLibraryComponent
  ],
  imports: [
    CommonModule,
    CommentsLibraryModule,
    PlaceCommentModule
  ]
})
export class VideoLibraryModule {
}
