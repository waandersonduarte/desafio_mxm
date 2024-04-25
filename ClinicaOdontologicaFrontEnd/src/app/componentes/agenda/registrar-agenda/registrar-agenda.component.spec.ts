import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAgendaComponent } from './registrar-agenda.component';

describe('RegistrarAgendaComponent', () => {
  let component: RegistrarAgendaComponent;
  let fixture: ComponentFixture<RegistrarAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
