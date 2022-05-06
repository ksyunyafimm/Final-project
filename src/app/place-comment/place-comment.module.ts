import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {PlaceCommentComponent} from "./place-comment.component";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [PlaceCommentComponent],
  exports: [
    PlaceCommentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PlaceCommentModule {

}
