import React, { useState, useEffect } from "react";
import axios from "axios";
import Bulbasar from "../imagens/1.png";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function ListPokemon() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/type/16").then((res) => {
      setPokemon(res.data.pokemon.map((p) => p.pokemon.name));
    });
  }, []);

  function render() {
    let key = 1;
    const cards = pokemon.map(pokemon => 
      <Card 
        key={key}
        style={{ width: "18rem", margin: "10px", float: "left" }}>
        <Card.Img variant="top" src={Bulbasar} />
        <Card.Body className="text-center">
          <Card.Title style={{ height: "40" }}>
            {pokemon}
          </Card.Title>
          <Card.Text>{'R$ 5,00'}</Card.Text>
          <Button variant="success" style={{ width: "100%" }}>
            Adicionar
          </Button>
        </Card.Body>
      </Card>
    );
    return cards;
  }

  return render();

  // <div>
  //   {pokemon.map(p => (
  //     <div key={p}>{p}</div>
  //   ))}
  // </div>
}
