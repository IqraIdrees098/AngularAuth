import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmpityListPage } from './empity-list.page';

describe('EmpityListPage', () => {
  let component: EmpityListPage;
  let fixture: ComponentFixture<EmpityListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpityListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmpityListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
