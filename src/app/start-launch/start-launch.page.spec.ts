import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StartLaunchPage } from './start-launch.page';

describe('StartLaunchPage', () => {
  let component: StartLaunchPage;
  let fixture: ComponentFixture<StartLaunchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartLaunchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StartLaunchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
