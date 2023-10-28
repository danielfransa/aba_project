package br.com.fatec.aba_project_backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
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
    private Date dataNascimento;

    @Enumerated(EnumType.STRING)
    private Sexo sexo;

    @Column(nullable = true, length = 50)
    private String cpf;

    @Column(nullable = true, length = 50)
    private String telefone;

    @Column(nullable = true, length = 50)
    private String email;

    @Column(nullable = true, length = 100)
    private String grauEscolaridade;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String infoMedicas;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String medicamentosEmUso;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String dadosTratamento;

    @ManyToMany
    private List<Responsaveis> responsaveis;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "endereco_id", referencedColumnName = "id")
    private Enderecos endereco;

    @ManyToMany
    @JoinTable(
            name = "cliente_protocolo",
            joinColumns = @JoinColumn(name = "cliente_id"),
            inverseJoinColumns = @JoinColumn(name = "protocolo_id")
    )
    private List<Protocolos> protocolos;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at", nullable = false)
    private Date updatedAt;

}
