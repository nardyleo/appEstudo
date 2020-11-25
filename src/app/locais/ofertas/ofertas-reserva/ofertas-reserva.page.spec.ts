import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OfertasReservaPage } from './ofertas-reserva.page';

describe('OfertasReservaPage', () => {
  let component: OfertasReservaPage;
  let fixture: ComponentFixture<OfertasReservaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertasReservaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OfertasReservaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
