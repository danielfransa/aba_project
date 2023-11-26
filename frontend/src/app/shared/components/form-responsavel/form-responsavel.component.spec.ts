import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormResponsavelComponent } from './form-responsavel.component';

describe('FormResponsavelComponent', () => {
  let component: FormResponsavelComponent;
  let fixture: ComponentFixture<FormResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormResponsavelComponent]
    });
    fixture = TestBed.createComponent(FormResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
