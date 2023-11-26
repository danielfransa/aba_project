import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelResponsavelComponent } from './expansion-panel-responsavel.component';

describe('ExpansionPanelResponsavelComponent', () => {
  let component: ExpansionPanelResponsavelComponent;
  let fixture: ComponentFixture<ExpansionPanelResponsavelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpansionPanelResponsavelComponent]
    });
    fixture = TestBed.createComponent(ExpansionPanelResponsavelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
