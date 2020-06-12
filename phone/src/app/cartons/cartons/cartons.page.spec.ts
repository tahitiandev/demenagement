import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartonsPage } from './cartons.page';

describe('CartonsPage', () => {
  let component: CartonsPage;
  let fixture: ComponentFixture<CartonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
