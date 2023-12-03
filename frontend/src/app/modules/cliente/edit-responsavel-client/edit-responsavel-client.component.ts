import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IResponsavel } from 'src/app/shared/interfaces';
import { ResponsavelService } from 'src/app/shared/services';

@Component({
  selector: 'app-edit-responsavel-client',
  templateUrl: './edit-responsavel-client.component.html',
  styleUrls: ['./edit-responsavel-client.component.scss']
})
export class EditResponsavelClientComponent {
  public responsavel: IResponsavel | null = null;
  public idResponsavel: string = '0';
  public idCliente: string = '0'
  public textButton: string = 'Adicionar';

  constructor(
    private route: ActivatedRoute,
    private service: ResponsavelService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    this.idResponsavel = this.route.snapshot.queryParams['responsavel'] || '0';
    this.idCliente = this.route.snapshot.queryParams['cliente'] || '0'

    if(this.idCliente !== '0' && this.idResponsavel !== '0') {
      this.bucarResponsavel(parseInt(this.idCliente), parseInt(this.idResponsavel));
    }
  }

  bucarResponsavel(idCliente: number, id: number): void {
    this.service.getResponsibleByid(idCliente, id).subscribe({
      next: (response) => {
        this.responsavel = response;
        this.textButton = 'Editar';
      },
      error: (err) => console.error(err)
    })
  }

  EditResponsavel(event: IResponsavel): void {
    if(this.idCliente === '0' || this.idResponsavel === '0') {
      this.service.saveResponsible(event, parseInt(this.idCliente)).subscribe({
        next: (response) => {
          this.router.navigate(['cliente', this.idCliente]);
        }, 
        error: (err) => console.error(err)
      })
      return;
    }

    this.service.updateResponsavel(event, parseInt(this.idCliente), parseInt(this.idResponsavel)).subscribe({
      next: (response) => {
        this.router.navigate(['cliente', this.idCliente]);
      },
      error: (err) => console.error(err)
    })
  }

  excluirResponsavel(event: number): void {
    this.service.deleteResponsavel(parseInt(this.idCliente), event).subscribe({
      next: (response) => {
        this.router.navigate(['cliente', this.idCliente])
      },
      error: (err) => console.error(err)
    })
  }

}
