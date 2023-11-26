import { CUSTOM_ELEMENTS_SCHEMA, Component, EventEmitter, Input, Output } from '@angular/core';
import { IResponsavel } from '../../interfaces';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'app-expansion-panel-responsavel',
  templateUrl: './expansion-panel-responsavel.component.html',
  styleUrls: ['./expansion-panel-responsavel.component.scss'],
  standalone: true,
  imports: [SharedModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ExpansionPanelResponsavelComponent {
  public _responsaveis: IResponsavel[] | undefined = [];

  @Input() set responsaveis(value: IResponsavel[] | undefined) {
    this._responsaveis = value;
  }

  @Output() acessarEvent = new EventEmitter<IResponsavel>();
  @Output() removerEvent = new EventEmitter<IResponsavel>();

  acessarResponsavel(index: number): void {
    if(this._responsaveis){
      this.acessarEvent.emit(this._responsaveis[index]);
    }
  }

  removeResponsavel(index: number): void {
    if(this._responsaveis){
      this.removerEvent.emit(this._responsaveis[index])
    }
  }
}
