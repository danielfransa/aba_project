export interface IEndereco {
  id?: string;
  cep: string;
  rua: string;
  numero: number;
  complemento?: string;
  bairro: string;
  cidade: string;
  estado: string;
}
