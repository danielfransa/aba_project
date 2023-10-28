package br.com.fatec.aba_project_backend.models.entities;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Data
@Entity
@Table(name = "enderecos")
public class Enderecos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false, length = 20)
    private String cep;

    @Column(nullable = true, length = 50)
    private String rua;

    @Column
    private Integer numero;

    @Column(nullable = true, length = 50)
    private String complemento;

    @Column(nullable = true, length = 50)
    private String bairro;

    @Column(nullable = true, length = 50)
    private String cidade;

    @Column(nullable = true, length = 50)
    private String estado;

    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "created_at", nullable = false, updatable = false)
    private Date createdAt;

    @UpdateTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "updated_at", nullable = false)
    private Date updatedAt;
}
