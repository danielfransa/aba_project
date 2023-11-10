import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroResponsavelComponent } from './cadastro-responsavel.component';

describe('CadastroResponsavelComponent', () => {
  let component: CadastroResponsavelComponent;
  let fixture: ComponentFixture<CadastroResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastroResponsavelComponent]
    });
    fixture = TestBed.createComponent(CadastroResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
