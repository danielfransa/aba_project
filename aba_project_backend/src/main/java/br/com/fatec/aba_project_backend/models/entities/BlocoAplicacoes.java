package br.com.fatec.aba_project_backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.List;

@Data
@Entity
@Table(name = "blocoAplicacoes")
public class BlocoAplicacoes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer numero;

    @Column
    private Integer score;

    @ManyToOne
    @JoinColumn(name = "protocolo_id")
    private Protocolos protocolo;

    @OneToMany(mappedBy = "blocoAplicacoes")
    private List<Aplicacoes> tentativasDeAplicacao;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at", nullable = false)
    private Date updatedAt;
}
