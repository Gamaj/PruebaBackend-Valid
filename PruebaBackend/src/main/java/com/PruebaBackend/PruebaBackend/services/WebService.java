package com.PruebaBackend.PruebaBackend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.PruebaBackend.PruebaBackend.sidecard.Registro;

import com.PruebaBackend.PruebaBackend.modelo.RegistroProcesar;

@RestController
@RequestMapping(value = "Registros")
@CrossOrigin(origins = { "*" })
public class WebService {
	@Autowired
	private RegistroProcesar registros;

	//Servicio 3 - Consultar los registros existentes en la base de datos
	@GetMapping
	public List<Registro> getRegistros() {
		return registros.getRegistro();
	}
	
    //Servicio 1 - Almacenar un registro en la base de datos
	@PostMapping(consumes = "application/json", produces = "application/json")
	public Registro saveNewRegister(@RequestBody Registro e) {

		return registros.saveNewRegistro(e);
	}
	
	//Servicio 2 - Actualizar el campo procesado de una lista de registros 
	@PutMapping(consumes = "application/json", produces = "application/json")
	public void updateStatusProcesado(@RequestBody List<Registro> lista) {
		for (Registro e : lista) {
			e.setProcesado(true);
			registros.updateStatusProcesado(e);
		}

	}

}
