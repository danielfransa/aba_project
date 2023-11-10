import { IEndereco } from "./endereco.interface";

export interface IResposavel {
  id?: string;
  nome: string;
  cpf: string;
  email: string;
  grauParentesco: string;
  telefone: string;
  endereco: IEndereco;
}
