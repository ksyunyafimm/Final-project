import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {PlaceCommentModule} from "./place-comment/place-comment.module";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import {YoutubeVideoModule} from "./youtube-video/youtube-video.module";
import { PlaceCommentComponent } from './place-comment/place-comment.component';
import {VgBufferingModule, VgControlsModule, VgCoreModule, VgOverlayPlayModule} from "ngx-videogular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    PlaceCommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxYoutubePlayerModule.forRoot(),
    YoutubeVideoModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
