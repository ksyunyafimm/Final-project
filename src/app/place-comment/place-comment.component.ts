import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-place-comment',
  templateUrl: './place-comment.component.html',
  styleUrls: ['./place-comment.component.scss']
})
export class PlaceCommentComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(),})
  constructor() { }

  ngOnInit(): void {
  }



}
