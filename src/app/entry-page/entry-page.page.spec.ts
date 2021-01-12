import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntryPagePage } from './entry-page.page';

describe('EntryPagePage', () => {
  let component: EntryPagePage;
  let fixture: ComponentFixture<EntryPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
