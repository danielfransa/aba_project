import { Component, OnInit } from '@angular/core';
import { DataClienteService } from '../service/data-cliente.service';
import { ICliente, IResponsavel } from 'src/app/shared/interfaces';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-responsavel',
  templateUrl: './cadastro-responsavel.component.html',
  styleUrls: ['./cadastro-responsavel.component.scss'],
})
export class CadastroResponsavelComponent implements OnInit {
  public cliente: ICliente | null = null;
  public responsavel: IResponsavel | null = null;
  public idResponsavel: number | null = null;

  constructor(
    private dataService: DataClienteService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.queryParams['responsavel'];
    this.idResponsavel = id ? parseInt(id) : null;
    this.dataService.cliente.subscribe({
      next: (data) => this.cliente = data,
    });
  }

  ngOnInit(): void {
    if(this.idResponsavel !== null && this.cliente?.responsible) {
      this.responsavel = this.cliente.responsible[this.idResponsavel];
    }
  }

  public addResponsavel(event: IResponsavel): void {
    if (this.cliente) {
      const responsavel = event;
      if(this.idResponsavel !== null && this.cliente?.responsible) {
        this.cliente.responsible[this.idResponsavel] = responsavel;
      } else {
        this.cliente.responsible?.push(responsavel);
      }
     
      this.dataService.setClient(this.cliente);
      this.router.navigate(['/cadastro-cliente']);
    }
  }
}
