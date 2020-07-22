import React, {useState, useEffect} from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch, 
} from '@fortawesome/free-solid-svg-icons';

function MenuPokemon() {

  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Loja Pokemon</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home" disabled>Encontre seu Pokemon tipo Dragão favorito.</Nav.Link>
    </Nav>
    <Form inline>
    
      <FormControl type="text" placeholder="Procurar Pokemon" className="mr-sm-2" />
      <Button variant="outline-light">GO! <FontAwesomeIcon icon={faSearch} /></Button>
    </Form>
  </Navbar>
  );
}

export default MenuPokemon;