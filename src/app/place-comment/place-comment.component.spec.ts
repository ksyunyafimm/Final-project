import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceCommentComponent } from './place-comment.component';

describe('PlaceCommentComponent', () => {
  let component: PlaceCommentComponent;
  let fixture: ComponentFixture<PlaceCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaceCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
