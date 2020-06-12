import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OriginePage } from './origine.page';

describe('OriginePage', () => {
  let component: OriginePage;
  let fixture: ComponentFixture<OriginePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OriginePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OriginePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
