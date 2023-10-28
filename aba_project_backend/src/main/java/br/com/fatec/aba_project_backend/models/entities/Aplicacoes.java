package br.com.fatec.aba_project_backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Data
@Entity
@Table(name = "aplicacoes")
public class Aplicacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer numeroAplicacao; //cada bloco de aplicação são 10 tentativas.

    @Column(length = 50)
    private String nomeAplicador;

    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(length = 50)
    private Status dica;

    @Column(columnDefinition = "TEXT")
    private Status observacao;

    @ManyToOne
    @JoinColumn(name = "bloco_aplicacoes_id")
    private BlocoAplicacoes blocoAplicacoes;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at", nullable = false)
    private Date updatedAt;

}
