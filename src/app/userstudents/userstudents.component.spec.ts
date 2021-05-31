import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstudentsComponent } from './userstudents.component';

describe('UserstudentsComponent', () => {
  let component: UserstudentsComponent;
  let fixture: ComponentFixture<UserstudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserstudentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
