import styled from "styled-components";
import React, { useState } from "react";
import { TextField, Box } from "@mui/material";

import Card from "../../Components/Card";
import restaurants from "../../assets/data/restaurants.json";

const Container = styled.div`
  padding: 32px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 850px){
    display: flex;
    flex-direction: column;
  }
`;

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  // Função para busca
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filtrar restaurantes com base na busca
  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box sx={{ marginBottom: 2, padding: 2 }}>
        <TextField
          fullWidth
          label="Buscar restaurante"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Box>
      <Container>
        {filteredRestaurants.map((restaurant, index) => (
          <Card
            key={index}
            imagem={restaurant.imagem}
            nome={restaurant.nome}
            localizacao={restaurant.localizacao}
            avaliacao={restaurant.avaliacao}
            horarioFuncionamento={restaurant.horarioFuncionamento}
            sobre={restaurant.sobre}
          />
        ))}
      </Container>
    </>
  );
}
