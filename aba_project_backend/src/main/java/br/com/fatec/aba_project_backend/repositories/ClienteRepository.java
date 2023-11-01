package br.com.fatec.aba_project_backend.repositories;

import br.com.fatec.aba_project_backend.models.entities.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ClienteRepository extends JpaRepository<Clientes, Integer> {

}
