import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OpenHouseListPage } from './open-house-list.page';

describe('OpenHouseListPage', () => {
  let component: OpenHouseListPage;
  let fixture: ComponentFixture<OpenHouseListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenHouseListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OpenHouseListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
