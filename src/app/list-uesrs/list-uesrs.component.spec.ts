import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUesrsComponent } from './list-uesrs.component';

describe('ListUesrsComponent', () => {
  let component: ListUesrsComponent;
  let fixture: ComponentFixture<ListUesrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListUesrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListUesrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
