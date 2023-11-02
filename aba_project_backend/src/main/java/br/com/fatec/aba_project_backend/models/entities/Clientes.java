package br.com.fatec.aba_project_backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.Instant;
import java.time.LocalDate;
import java.util.List;

@Data
@Entity
@Table(name = "clientes")
public class Clientes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column
    @Temporal(TemporalType.DATE)
    private LocalDate dataNascimento;

    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @Column(length = 50)
    private String cpf;

    @Column(length = 50)
    private String telefone;

    @Column(length = 50)
    private String email;

    @Column(length = 100)
    private String grauEscolaridade;

    @Column(columnDefinition = "TEXT")
    private String infoMedicas;

    @Column(columnDefinition = "TEXT")
    private String medicamentosEmUso;

    @Column(columnDefinition = "TEXT")
    private String dadosTratamento;


    //TODO ajustar relacionamentos não esta funcionando corretamente com eles:
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "cliente_responsaveis",
            joinColumns = @JoinColumn(name = "cliente_id"),
            inverseJoinColumns = @JoinColumn(name = "responsaveis_id")
    )
    private List<Responsavel> responsaveis;

    @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Enderecos endereco;

    @OneToMany(fetch = FetchType.LAZY)
    private List<Protocolos> protocolos;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    private Instant createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at", nullable = false)
    private Instant updatedAt;

}
