import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/services';

@Component({
  selector: 'app-cadastro-cliente',
  templateUrl: './cadastro-cliente.component.html',
  styleUrls: ['./cadastro-cliente.component.scss']
})
export class CadastroClienteComponent {

  public formCadastro!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private clienteService: ClienteService,
    private router: Router,
  ) {
    this.formCadastro = this.formBuilder.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    })
  }

  save() {
    const cliente = this.formCadastro.getRawValue();
    cliente.id = self.crypto.randomUUID()
    this.clienteService.saveCliente(cliente);
    this.formCadastro.reset();
    this.router.navigate(['/home'])
  }
}
