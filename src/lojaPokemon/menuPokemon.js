import React, {useState, useEffect} from 'react'
import ListPokemon from './listPokemon';
import axios from 'axios';

function MenuPokemon() {


  
  // const [pokemon, setPokemon] = useState([])

  // useEffect(() => {
  //   axios.get("https://pokeapi.co/api/v2/pokemon")
  //   .then(res => {
  //     setPokemon(res.data.results.map(p => p.name))
  //   })
  // }, [])




  return (
    // <ListPokemon pokemon={pokemon}/>
    <h1>Menu</h1>
  );
}

export default MenuPokemon;