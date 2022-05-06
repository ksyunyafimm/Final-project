import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor() {
  }

  public isShowComponent: boolean = false

  public openComponent(): void {
    this.isShowComponent = true
  }

  public closeComponent(): void {
    this.isShowComponent = false
  }
}
