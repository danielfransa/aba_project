package br.com.fatec.aba_project_backend.controller;

import br.com.fatec.aba_project_backend.api.resources.ClienteResources;
import br.com.fatec.aba_project_backend.models.entities.Clientes;
import br.com.fatec.aba_project_backend.services.ClienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/clientes")
public class ClienteController {
    private final ClienteService service;

    public ClienteController(ClienteService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<ClienteResources> save(@RequestBody ClienteResources pCliente) {
        pCliente.setId(null);
        Clientes cliente = service.salvar(pCliente);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}").buildAndExpand(cliente.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ClienteResources update(@PathVariable("id") Integer pId, @RequestBody ClienteResources pCliente) {
        return converter(service.atualizar(pId, pCliente));
    }

    @GetMapping("/{id}")
    public ClienteResources findById(@PathVariable("id") Integer pId) {

        return converter(service.buscarPorId(pId));
    }

    @GetMapping
    public List<ClienteResources> getAll() {
        return service.buscarTodos().stream().map(this::converter).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer pId) throws Exception {
        service.remover(pId);
    }

    private ClienteResources converter(Clientes pCliente){
        ClienteResources cliente = new ClienteResources();

        cliente.setId(pCliente.getId());
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

        return cliente;
    }

}
