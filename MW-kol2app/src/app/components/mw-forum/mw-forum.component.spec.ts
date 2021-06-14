import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MWForumComponent } from './mw-forum.component';

describe('MWForumComponent', () => {
  let component: MWForumComponent;
  let fixture: ComponentFixture<MWForumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MWForumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MWForumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
