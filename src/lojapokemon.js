import React, { useState } from "react";
import MenuPokemon from "./lojaPokemon/menuPokemon";
import ListPokemon from "./lojaPokemon/listPokemon";
import Checkout from "./lojaPokemon/checkout";
import Pokemons from "./lojaPokemon/pokemons";

function LojaPokemon() {
  const [carrinho, setCarrinho] = useState({ pokemons: [] });
  const [exibitProdutos, setExibirProdutos] = useState(true);
  const [exibirCheckout, setExibirCheckout] = useState(true);
  const [total, setTotal] = useState("0,00");

  return (
    <div>
      <MenuPokemon />
      <Checkout/>
      <Pokemons/>
      <ListPokemon />
      
    </div>
  );
}

export default LojaPokemon;
