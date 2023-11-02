package br.com.fatec.aba_project_backend.api.resources;

import lombok.Data;

import java.util.List;

@Data
public class ResponsavelResources {

    private Integer id;
    private String nome;
    private String cpf;
    private String grauParentesco;
    private String email;
    private String telefone;
    private List<Integer> clientsId;


}
