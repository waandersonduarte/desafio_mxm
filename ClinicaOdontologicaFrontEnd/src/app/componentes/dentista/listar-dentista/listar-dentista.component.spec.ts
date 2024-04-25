import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDentistaComponent } from './listar-dentista.component';

describe('ListarDentistaComponent', () => {
  let component: ListarDentistaComponent;
  let fixture: ComponentFixture<ListarDentistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarDentistaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarDentistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
