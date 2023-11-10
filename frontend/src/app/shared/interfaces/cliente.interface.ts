import { IEndereco } from "./endereco.interface";
import { IResposavel } from "./responsavel.interface";

export interface ICliente {
  id?: string;
  nome: string;
  dataNascimento: string;
  sexo: string;
  cpf: string;
  telefone: string;
  email: string;
  grauEscolaridade?: string;
  infoMedicas?: string;
  medicamentosEmUso?: string;
  dadosTratamento?: string;
  responsaveis?: IResposavel[];
  endereco: IEndereco;
}
