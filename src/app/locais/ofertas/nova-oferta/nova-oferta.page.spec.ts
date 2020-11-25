import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NovaOfertaPage } from './nova-oferta.page';

describe('NovaOfertaPage', () => {
  let component: NovaOfertaPage;
  let fixture: ComponentFixture<NovaOfertaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaOfertaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NovaOfertaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
