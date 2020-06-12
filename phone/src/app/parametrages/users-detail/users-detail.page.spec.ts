import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsersDetailPage } from './users-detail.page';

describe('UsersDetailPage', () => {
  let component: UsersDetailPage;
  let fixture: ComponentFixture<UsersDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsersDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
