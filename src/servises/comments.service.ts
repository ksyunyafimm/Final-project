import { Injectable } from '@angular/core';

import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

constructor(private httpClient:HttpClient) {
}
  getComment() {
  return this.httpClient.get('assets/db.json')

  }

}

