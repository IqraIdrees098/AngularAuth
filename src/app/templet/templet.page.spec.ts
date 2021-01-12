import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TempletPage } from './templet.page';

describe('TempletPage', () => {
  let component: TempletPage;
  let fixture: ComponentFixture<TempletPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempletPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TempletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
