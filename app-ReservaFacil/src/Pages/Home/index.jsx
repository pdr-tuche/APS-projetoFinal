import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";

import Card from "../../Components/Card";
import data from "../../assets/data/restaurants.json";
import axios from "axios";
import { API_BASE_URL } from "../../api";

const Container = styled.div`
  padding: 32px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
  }
`;

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/restaurants`);
        setRestaurants(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            imagem={data[0].imagem}
            nome={restaurant.name}
            localizacao={restaurant.address}
            avaliacao={restaurant.avaliacao}
            sobre={restaurant.description}
            horarioFuncionamento={restaurant.horarioFuncionamento}
            datasDisponiveis={restaurant.datasDisponiveis}
            horariosDisponiveis={restaurant.horarioFuncionamento}
            userID={+localStorage.getItem("userID")}
            restaurantID={restaurant.id}
          />
        ))}
      </Container>
    </>
  );
}
