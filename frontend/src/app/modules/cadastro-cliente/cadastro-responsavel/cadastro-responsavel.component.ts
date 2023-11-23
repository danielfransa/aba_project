import { Component, OnInit } from '@angular/core';
import { DataClienteService } from '../service/data-cliente.service';
import { ICliente, IResponsavel } from 'src/app/shared/interfaces';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-responsavel',
  templateUrl: './cadastro-responsavel.component.html',
  styleUrls: ['./cadastro-responsavel.component.scss'],
})
export class CadastroResponsavelComponent implements OnInit {
  public form!: FormGroup;
  public cliente: ICliente | null = null;
  public responsavel: IResponsavel | null = null;
  public idResponsavel: number | null = null;

  constructor(
    private dataService: DataClienteService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.queryParams['responsavel'];
    this.idResponsavel = id ? parseInt(id) - 1 : null;
    this.dataService.cliente.subscribe({
      next: (data) => this.cliente = data,
    });
  }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    if(this.idResponsavel !== null && this.cliente?.responsible) {
        this.responsavel = this.cliente.responsible[this.idResponsavel];
    }
   
    this.form = this.formBuilder.group({
      parent_name: [
        this.responsavel?.parent_name || null,
        [Validators.required],
      ],
      cpf: [
        this.responsavel?.cpf || null,
        [Validators.required],
      ],
      email: [
        this.responsavel?.email || null,
        [Validators.required, Validators.email],
      ],
      degree_of_kinship: [
        this.responsavel?.degree_of_kinship || null,
        [Validators.required],
      ],
      telephone: [
        this.responsavel?.telephone || null,
        [Validators.required],
      ],
    });
  }

  public addResponsavel(): void {
    if (this.cliente) {
      const responsavel = this.form.getRawValue();
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
