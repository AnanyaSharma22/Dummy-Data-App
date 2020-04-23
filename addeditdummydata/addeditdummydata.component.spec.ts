import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditdummydataComponent } from './addeditdummydata.component';

describe('AddeditdummydataComponent', () => {
  let component: AddeditdummydataComponent;
  let fixture: ComponentFixture<AddeditdummydataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditdummydataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditdummydataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
