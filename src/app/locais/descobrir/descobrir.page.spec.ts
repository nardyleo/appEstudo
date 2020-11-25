import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescobrirPage } from './descobrir.page';

describe('DescobrirPage', () => {
  let component: DescobrirPage;
  let fixture: ComponentFixture<DescobrirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescobrirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescobrirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
