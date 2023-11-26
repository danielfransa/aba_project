import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SharedModule } from '../../shared.module';
import { IResponsavel } from '../../interfaces';

@Component({
  selector: 'app-form-responsavel',
  templateUrl: './form-responsavel.component.html',
  styleUrls: ['./form-responsavel.component.scss'],
  standalone: true,
  imports: [SharedModule]
})
export class FormResponsavelComponent implements OnInit {
  public form!: FormGroup;
  public _responsavel: IResponsavel | null = null;
  public _textButton: string = '';
  public _exibeExcluir: boolean = false;

  @Input() set responsavel(value: IResponsavel | null) {
    this._responsavel = value;
    this.createForm();
  }

  @Input() set textButton(value: string) {
    this._textButton = value;
  }

  @Input() set exibeExcluir(value: boolean) {
    this._exibeExcluir = value;
  }

  @Output() responsavelEvent = new EventEmitter<IResponsavel>();
  @Output() excluirEvent = new EventEmitter<number>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  onClick() {
    const responsavel = this.form.getRawValue() as IResponsavel;
    this.responsavelEvent.emit(responsavel);
  }

  excluir(): void {
    this.excluirEvent.emit(this._responsavel?.id || undefined);
  }

  public createForm(): void {
    this.form = this.formBuilder.group({
      parent_name: [
        this._responsavel?.parent_name || null,
        [Validators.required],
      ],
      cpf: [
        this._responsavel?.cpf || null,
        [Validators.required],
      ],
      email: [
        this._responsavel?.email || null,
        [Validators.required, Validators.email],
      ],
      degree_of_kinship: [
        this._responsavel?.degree_of_kinship || null,
        [Validators.required],
      ],
      telephone: [
        this._responsavel?.telephone || null,
        [Validators.required],
      ],
    });
  }
}
