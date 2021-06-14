import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWForumItemComponent } from './mw-forum-item.component';

describe('MWForumItemComponent', () => {
  let component: MWForumItemComponent;
  let fixture: ComponentFixture<MWForumItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWForumItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MWForumItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
