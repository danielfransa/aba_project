package br.com.fatec.aba_project_backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "aplicacoes")
public class Aplicacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer numeroAplicacao; //cada bloco de aplicação são 10 tentativas.

    @Column(nullable = true, length = 50)
    private String nomeAplicador;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(nullable = true, length = 50)
    private Status dica;

    @Column(nullable = true, columnDefinition = "TEXT")
    private Status observacao;

}
