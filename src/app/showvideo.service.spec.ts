import { TestBed } from '@angular/core/testing';

import { ShowvideoService } from './showvideo.service';

describe('ShowvideoService', () => {
  let service: ShowvideoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowvideoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
