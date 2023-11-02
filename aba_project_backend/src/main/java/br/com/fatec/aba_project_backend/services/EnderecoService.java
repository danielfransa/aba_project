package br.com.fatec.aba_project_backend.services;

import br.com.fatec.aba_project_backend.models.entities.Enderecos;
import br.com.fatec.aba_project_backend.repositories.EnderecoRepository;
import org.springframework.stereotype.Service;

@Service
public class EnderecoService {

    private final EnderecoRepository repository;

    public EnderecoService(EnderecoRepository repository) {
        this.repository = repository;
    }

    public Enderecos salvar(Enderecos enderecos){
        return repository.save(enderecos);
    }


}
