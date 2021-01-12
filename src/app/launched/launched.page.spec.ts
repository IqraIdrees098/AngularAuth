import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LaunchedPage } from './launched.page';

describe('LaunchedPage', () => {
  let component: LaunchedPage;
  let fixture: ComponentFixture<LaunchedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaunchedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
