import { IResponsavel } from './responsavel.interface';

export interface ICliente {
  id?: number;
  name: string;
  brithday: string;
  gender: string;
  cpf: string;
  telephone: string;
  email: string;
  education_level?: string;
  medical_informations?: string;
  medicines_in_use?: string;
  processing_information?: string;
  cep: string;
  street: string;
  number: number;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  responsible?: IResponsavel[];
  created_at?: string;
  updated_at?: string;
}
