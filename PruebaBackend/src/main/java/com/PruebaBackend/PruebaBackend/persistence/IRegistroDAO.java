package com.PruebaBackend.PruebaBackend.persistence;

import org.springframework.data.repository.CrudRepository;

import com.PruebaBackend.PruebaBackend.sidecard.Registro;

public interface IRegistroDAO extends CrudRepository<Registro, Long>{

}
