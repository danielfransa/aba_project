package br.com.fatec.aba_project_backend.repositories;

import br.com.fatec.aba_project_backend.models.entities.Enderecos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EnderecoRepository extends JpaRepository<Enderecos, Integer> {

}
