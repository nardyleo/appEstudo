import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutenticarPage } from './autenticar.page';

describe('AutenticarPage', () => {
  let component: AutenticarPage;
  let fixture: ComponentFixture<AutenticarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutenticarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutenticarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
