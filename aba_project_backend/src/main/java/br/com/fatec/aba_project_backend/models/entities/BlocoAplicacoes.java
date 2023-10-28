package br.com.fatec.aba_project_backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;

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

    @ManyToOne
    @JoinColumn(name = "protocolo_id")
    private Protocolos protocolo;

    @OneToMany(mappedBy = "blocoDeAplicacao")
    private List<Aplicacoes> tentativasDeAplicacao;
}
