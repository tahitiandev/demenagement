import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartonsAjouterPage } from './cartons-ajouter.page';

describe('CartonsAjouterPage', () => {
  let component: CartonsAjouterPage;
  let fixture: ComponentFixture<CartonsAjouterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartonsAjouterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartonsAjouterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
