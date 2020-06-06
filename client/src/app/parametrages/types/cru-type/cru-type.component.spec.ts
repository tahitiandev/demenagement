import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CruTypeComponent } from './cru-type.component';

describe('CruTypeComponent', () => {
  let component: CruTypeComponent;
  let fixture: ComponentFixture<CruTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CruTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CruTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
