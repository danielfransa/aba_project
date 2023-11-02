package br.com.fatec.aba_project_backend.api.resources;

import br.com.fatec.aba_project_backend.models.entities.Sexo;
import lombok.Data;

import java.time.LocalDate;
@Data
public class ClienteResources {

    private Integer id;
    private String name;
    private LocalDate dataNascimento;
    private Sexo sexo;
    private String cpf;
    private String telefone;
    private String email;
    private String grauEscolaridade;
    private String infoMedicas;
    private String medicamentosEmUso;
    private String dadosTratamento;
}
