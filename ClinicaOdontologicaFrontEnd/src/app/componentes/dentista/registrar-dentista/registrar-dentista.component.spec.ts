import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarDentistaComponent } from './registrar-dentista.component';

describe('RegistrarDentistaComponent', () => {
  let component: RegistrarDentistaComponent;
  let fixture: ComponentFixture<RegistrarDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarDentistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
