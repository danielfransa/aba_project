package br.com.fatec.aba_project_backend.services;

import br.com.fatec.aba_project_backend.api.resources.ClienteResources;
import br.com.fatec.aba_project_backend.models.entities.Clientes;
import br.com.fatec.aba_project_backend.repositories.ClienteRepository;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {

    private final ClienteRepository repository;


    public ClienteService(ClienteRepository repository) {
        this.repository = repository;
    }

    public Clientes salvar(ClienteResources pCliente){
        Clientes cliente = new Clientes();

        cliente.setName(pCliente.getName());
        cliente.setDataNascimento(pCliente.getDataNascimento());
        cliente.setSexo(pCliente.getSexo());
        cliente.setCpf(pCliente.getCpf());
        cliente.setTelefone(pCliente.getTelefone());
        cliente.setEmail(pCliente.getEmail());
        cliente.setGrauEscolaridade(pCliente.getGrauEscolaridade());
        cliente.setInfoMedicas(pCliente.getInfoMedicas());
        cliente.setMedicamentosEmUso(pCliente.getMedicamentosEmUso());
        cliente.setDadosTratamento(pCliente.getDadosTratamento());
        return repository.save(cliente);
    }

    public Clientes buscarPorId(Integer pId) {
        Optional<Clientes> optional = repository.findById(pId);
        if (optional.isEmpty()){
            throw new ObjectNotFoundException("Cliente não localizada. ID: " + pId , pId);
        }
        return optional.get();
    }

    public List<Clientes> buscarTodos() {
        return repository.findAll();
    }

    public Clientes atualizar(Integer pId, ClienteResources pCliente) {

        Clientes cliente = buscarPorId(pId);

        cliente.setName(pCliente.getName());
        cliente.setDataNascimento(pCliente.getDataNascimento());
        cliente.setSexo(pCliente.getSexo());
        cliente.setCpf(pCliente.getCpf());
        cliente.setTelefone(pCliente.getTelefone());
        cliente.setEmail(pCliente.getEmail());
        cliente.setGrauEscolaridade(pCliente.getGrauEscolaridade());
        cliente.setInfoMedicas(pCliente.getInfoMedicas());
        cliente.setMedicamentosEmUso(pCliente.getMedicamentosEmUso());
        cliente.setDadosTratamento(pCliente.getDadosTratamento());

        return repository.save(cliente);
    }

    public void remover(Integer pId) throws Exception{
        try{
            repository.deleteById(pId);
        } catch (Exception e) {
            throw new ObjectNotFoundException("Cliente não encontrado. Id:" + pId, pId);
        }
    }

}
