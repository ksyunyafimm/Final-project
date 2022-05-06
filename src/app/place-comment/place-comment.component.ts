import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShowvideoService} from "../../servises/showvideo.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-place-comment',
  templateUrl: './place-comment.component.html',
  styleUrls: ['./place-comment.component.scss']
})
export class PlaceCommentComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required)
  })

  constructor(private showVideoService: ShowvideoService,
              private httpClient: HttpClient) {
  }

  ngOnInit(): void {
  }

  isDisabled: boolean = false

  public onSendButton(): void {
    if (this.form.invalid) {
      alert("Form is not valid")
      return
    }
    console.log(this.form.value)
    const formValue = this.form.value
    this.httpClient.post('http://localhost:3000/comments', formValue).subscribe()

  }


}
