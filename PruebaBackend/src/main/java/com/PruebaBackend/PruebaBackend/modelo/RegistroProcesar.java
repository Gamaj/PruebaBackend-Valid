package com.PruebaBackend.PruebaBackend.modelo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.PruebaBackend.PruebaBackend.persistence.IRegistroDAO;
import com.PruebaBackend.PruebaBackend.sidecard.Registro;

@Service
public class RegistroProcesar {

	@Autowired
	private IRegistroDAO registroDAO;
	
	//Retornar todos los registros de la base de datos 
	public List<Registro> getRegistro() {
		return (List<Registro>) registroDAO.findAll();
	}
	//Guardar un nuevo registro
	public Registro saveNewRegistro(Registro e) {
		return registroDAO.save(e);
	}
	//Actualizar el campo procesado de un registro
	public void updateStatusProcesado(Registro e) {
		Registro a = registroDAO.findById(e.getId()).get();
		a.setProcesado(e.isProcesado());
		registroDAO.save(a);
	}

}
