import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetalheLocalPage } from './detalhe-local.page';

describe('DetalheLocalPage', () => {
  let component: DetalheLocalPage;
  let fixture: ComponentFixture<DetalheLocalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalheLocalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetalheLocalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
