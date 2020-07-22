import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCashRegister } from "@fortawesome/free-solid-svg-icons";
import ItensCarrinho from './itensCarrinho';

export default function Carrinho(props) {

  function calcularTotal(){
    if(props.pokemons.length === 0){
      return '0,00';
    }
    let total = 0;
    props.pokemons.forEach(pokemons => {
      let preco = pokemons.preco.replace(',', '.').replace('R$ ', '');
      total += parseFloat(preco) * pokemons.quantidade;
    });
    return total.toFixed(2).toString().replace('.', ',');
  }

  return (
    <div>
      <h1 style={{color: '#808080'}}>Carrinho</h1>
      <span><ItensCarrinho pokemons={props.pokemons}/></span>
      <ListGroup variant="flush">
        
        <ListGroup.Item>Total: R$ {calcularTotal()}</ListGroup.Item>
      </ListGroup>
      <span>
        <Button onClick={props.handleExibirModal} variant="success" size="lg">
          Finalizar Compra
        </Button>
      </span>
    </div>
  );
}

Carrinho.propTypes = {
  pokemons: PropTypes.array.isRequired,
  handleExibirModal: PropTypes.func.isRequired,
};
