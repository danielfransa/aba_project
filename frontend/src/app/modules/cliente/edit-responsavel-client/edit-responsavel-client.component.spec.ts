import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditResponsavelClientComponent } from './edit-responsavel-client.component';

describe('EditResponsavelClientComponent', () => {
  let component: EditResponsavelClientComponent;
  let fixture: ComponentFixture<EditResponsavelClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditResponsavelClientComponent]
    });
    fixture = TestBed.createComponent(EditResponsavelClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
