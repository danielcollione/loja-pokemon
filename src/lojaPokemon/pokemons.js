import React, {useState} from 'react'
import ListPokemon from './listPokemon';
import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export default function Pokemons(props) {

  const [exibirMsg, setExibirMsg] = useState(false);
  const [pokemon, setPokemon] = useState('');

  function visivel(){
    return props.visivel ? null : 'hidden';
  }

  function exibirMensagem(pokemon) {
    setExibirMsg(true);
    setPokemon(pokemon);
    setTimeout(() => {
      setExibirMsg(false)
    }, 3000);
  }

  return (
    <div className={visivel()}>
      <Alert
        variant="success"
        style={{ margin: '10px'}}
        show={exibirMsg}>
          <b>{pokemon}</b> adicionado com sucesso ao carrinho!
        </Alert>
      <ListPokemon
        exibirMensagem={exibirMensagem}
        adicionarPokemon={props.adicionarPokemon}
      />
    </div>
  )
}

Pokemons.propTypes = {
  visivel: PropTypes.bool.isRequired,
  adicionarPokemon: PropTypes.func.isRequired,
}
