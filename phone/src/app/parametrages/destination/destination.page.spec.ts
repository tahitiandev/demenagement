import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DestinationPage } from './destination.page';

describe('DestinationPage', () => {
  let component: DestinationPage;
  let fixture: ComponentFixture<DestinationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DestinationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DestinationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
