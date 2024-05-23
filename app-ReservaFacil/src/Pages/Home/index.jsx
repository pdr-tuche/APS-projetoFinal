import React from "react";
import Card from "../../Components/Card";
import { Container } from "./style";
import restaurants from "../../assets/data/restaurants.json";

export function Home() {
  return (
    <Container>
      {restaurants.map((restaurant, index) => (
        <Card
          key={index}
          imagem={restaurant.imagem}
          nome={restaurant.nome}
          localizacao={restaurant.localizacao}
          avaliacao={restaurant.avaliacao}
          sobre={restaurant.sobre}
        />
      ))}
    </Container>
  );
}
