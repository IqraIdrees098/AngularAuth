import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddOpenHousePage } from './add-open-house.page';

describe('AddOpenHousePage', () => {
  let component: AddOpenHousePage;
  let fixture: ComponentFixture<AddOpenHousePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOpenHousePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddOpenHousePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
