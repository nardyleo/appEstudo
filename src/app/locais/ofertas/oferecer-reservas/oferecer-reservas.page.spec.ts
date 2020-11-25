import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OferecerReservasPage } from './oferecer-reservas.page';

describe('OferecerReservasPage', () => {
  let component: OferecerReservasPage;
  let fixture: ComponentFixture<OferecerReservasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OferecerReservasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OferecerReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
