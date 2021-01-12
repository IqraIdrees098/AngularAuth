import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChooseTemplatePage } from './choose-template.page';

describe('ChooseTemplatePage', () => {
  let component: ChooseTemplatePage;
  let fixture: ComponentFixture<ChooseTemplatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTemplatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChooseTemplatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
