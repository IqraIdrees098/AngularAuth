import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartSlidesPage } from './start-slides.page';

describe('StartSlidesPage', () => {
  let component: StartSlidesPage;
  let fixture: ComponentFixture<StartSlidesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartSlidesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartSlidesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
