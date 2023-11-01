package br.com.fatec.aba_project_backend.api.resources;

import br.com.fatec.aba_project_backend.models.entities.Clientes;
import br.com.fatec.aba_project_backend.services.ClienteService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteResource {
    private final ClienteService service;

    public ClienteResource(ClienteService service) {
        this.service = service;
    }

    @PostMapping()
    public ResponseEntity<Clientes> save(@RequestBody Clientes pCliente) {
        pCliente.setId(null);
        Clientes cliente = service.salvar(pCliente);

        URI uri = ServletUriComponentsBuilder
                .fromCurrentRequest()
                .path("/{id}").buildAndExpand(cliente.getId())
                .toUri();

        return ResponseEntity.created(uri).build();
    }

    @PutMapping("/{id}")
    public Clientes update(@PathVariable("id") Integer pId, @RequestBody Clientes pCliente) {
        return service.atualizar(pId, pCliente);
    }

    @GetMapping("/{id}")
    public Clientes findById(@PathVariable("id") Integer pId) {
        return service.buscarPorId(pId);
    }

    @GetMapping("/all")
    public List<Clientes> getAll() {
        return service.buscarTodos();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable("id") Integer pId) throws Exception {
        service.remover(pId);
    }

}
