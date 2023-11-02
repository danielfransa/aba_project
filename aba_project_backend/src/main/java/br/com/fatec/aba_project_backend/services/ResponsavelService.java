package br.com.fatec.aba_project_backend.services;

import br.com.fatec.aba_project_backend.api.resources.ResponsavelResources;
import br.com.fatec.aba_project_backend.models.entities.Clientes;
import br.com.fatec.aba_project_backend.models.entities.Responsavel;
import br.com.fatec.aba_project_backend.repositories.ClienteRepository;
import br.com.fatec.aba_project_backend.repositories.ResponsavelRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResponsavelService {
    
    private ResponsavelRepository repository;
    private ClienteRepository clienteRepository;

    public ResponsavelService(ResponsavelRepository responsavelRepository, ClienteRepository clienteRepository) {
        this.repository = responsavelRepository;
        this.clienteRepository = clienteRepository;
    }

    public Responsavel salvar(ResponsavelResources pResponsavel){
        Responsavel responsavel = new Responsavel();

        responsavel.setNome(pResponsavel.getNome());
        responsavel.setCpf(pResponsavel.getCpf());
        responsavel.setGrauParentesco(pResponsavel.getGrauParentesco());
        responsavel.setTelefone(pResponsavel.getTelefone());
        responsavel.setEmail(pResponsavel.getEmail());
        List<Clientes> clientes = clienteRepository.findAllById(pResponsavel.getClientsId());
        responsavel.setClientes(clientes);
        return repository.save(responsavel);
    }

    public Responsavel buscarPorId(Integer pId) {
        Optional<Responsavel> optional = repository.findById(pId);
        if (optional.isEmpty()){
            throw new ObjectNotFoundException("Responsavel não localizada. ID: " + pId , pId);
        }
        return optional.get();
    }

    public List<Responsavel> buscarTodos() {
        return repository.findAll();
    }

    public Responsavel atualizar(Integer pId, ResponsavelResources pResponsavel) {

        Responsavel responsavel = buscarPorId(pId);

        responsavel.setNome(pResponsavel.getNome());
        responsavel.setCpf(pResponsavel.getCpf());
        responsavel.setGrauParentesco(pResponsavel.getGrauParentesco());
        responsavel.setTelefone(pResponsavel.getTelefone());
        responsavel.setEmail(pResponsavel.getEmail());
        List<Clientes> clientesSalvos = responsavel.getClientes();
        List<Clientes> novosClientes = clienteRepository.findAllById(pResponsavel.getClientsId());
        clientesSalvos.addAll(novosClientes);
        responsavel.setClientes(clientesSalvos);

        return repository.save(responsavel);
    }

    public void remover(Integer pId) throws Exception{
        try{
            repository.deleteById(pId);
        } catch (Exception e) {
            throw new ObjectNotFoundException("Responsavel não encontrado. Id:" + pId, pId);
        }
    }



}
