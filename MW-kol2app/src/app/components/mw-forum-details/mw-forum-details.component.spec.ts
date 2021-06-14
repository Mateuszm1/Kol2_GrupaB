import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWForumDetailsComponent } from './mw-forum-details.component';

describe('MWForumDetailsComponent', () => {
  let component: MWForumDetailsComponent;
  let fixture: ComponentFixture<MWForumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWForumDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MWForumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
