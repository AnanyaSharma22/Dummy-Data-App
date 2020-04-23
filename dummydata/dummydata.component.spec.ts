import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummydataComponent } from './dummydata.component';

describe('DummydataComponent', () => {
  let component: DummydataComponent;
  let fixture: ComponentFixture<DummydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
