import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { TextField, Box } from "@mui/material";

import Card from "../../Components/Card";
import restaurants from "../../assets/data/restaurants.json";
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
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [userID, setUserID] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/restaurants`);
        setFilteredRestaurants(response.data);

        const storedUserId = localStorage.getItem("userID");
        setUserID(storedUserId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [userID]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRestaurantsFake = restaurants.filter((restaurant) =>
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
            imagem={filteredRestaurantsFake[index].imagem}
            nome={restaurant.name}
            localizacao={restaurant.address}
            avaliacao={filteredRestaurantsFake[index].avaliacao}
            sobre={restaurant.description}
            horarioFuncionamento={
              filteredRestaurantsFake[index].horarioFuncionamento
            }
            datasDisponiveis={filteredRestaurantsFake[index].datasDisponiveis}
            horariosDisponiveis={
              filteredRestaurantsFake[index].horarioFuncionamento
            }
            userID={+localStorage.getItem("userID")}
            restaurantID={restaurant.id}
          />
        ))}
      </Container>
    </>
  );
}
