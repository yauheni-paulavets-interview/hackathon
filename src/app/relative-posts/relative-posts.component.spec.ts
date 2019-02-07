import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativePostsComponent } from './relative-posts.component';

describe('RelativePostsComponent', () => {
  let component: RelativePostsComponent;
  let fixture: ComponentFixture<RelativePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
