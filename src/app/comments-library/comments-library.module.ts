import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsLibraryComponent } from './comments-library.component';



@NgModule({
  declarations: [
    CommentsLibraryComponent
  ],
  exports: [
    CommentsLibraryComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CommentsLibraryModule { }
