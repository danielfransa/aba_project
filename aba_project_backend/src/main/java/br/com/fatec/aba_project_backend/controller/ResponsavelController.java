package br.com.fatec.aba_project_backend.controller;

import br.com.fatec.aba_project_backend.api.resources.ResponsavelResources;
import br.com.fatec.aba_project_backend.models.entities.Clientes;
import br.com.fatec.aba_project_backend.models.entities.Responsavel;
import br.com.fatec.aba_project_backend.services.ResponsavelService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.stream.Collectors;

public class ResponsavelController {
    private final ResponsavelService service;

    public ResponsavelController(ResponsavelService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<ResponsavelResources> save(@RequestBody ResponsavelResources pResponsavel) {
        pResponsavel.setId(null);
        Responsavel responsavel = service.salvar(pResponsavel);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}").buildAndExpand(responsavel.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public ResponsavelResources update(@PathVariable("id") Integer pId, @RequestBody ResponsavelResources pResponsavel) {
        return converter(service.atualizar(pId, pResponsavel));
    }

    @GetMapping("/{id}")
    public ResponsavelResources findById(@PathVariable("id") Integer pId) {

        return converter(service.buscarPorId(pId));
    }

    @GetMapping
    public List<ResponsavelResources> getAll() {
        return service.buscarTodos().stream().map(this::converter).collect(Collectors.toList());
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer pId) throws Exception {
        service.remover(pId);
    }

    private ResponsavelResources converter(Responsavel pResponsavel){
        ResponsavelResources responsavel = new ResponsavelResources();

        responsavel.setId(pResponsavel.getId());
        responsavel.setNome(pResponsavel.getNome());
        responsavel.setCpf(pResponsavel.getCpf());
        responsavel.setGrauParentesco(pResponsavel.getGrauParentesco());
        responsavel.setTelefone(pResponsavel.getTelefone());
        responsavel.setEmail(pResponsavel.getEmail());
        List<Clientes> clientesSalvos = pResponsavel.getClientes();
        responsavel.setClientsId(clientesSalvos.stream().map(Clientes::getId).collect(Collectors.toList()));

        return responsavel;
    }

}
