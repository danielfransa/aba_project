package br.com.fatec.aba_project_backend.api.resources;

import br.com.fatec.aba_project_backend.models.entities.Sexo;
import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;

@Data
public class EnderecoResources {


    private Integer id;

    private String cep;

    private String rua;

    private Integer numero;

    private String complemento;

    private String bairro;

    private String cidade;

    private String estado;


}
