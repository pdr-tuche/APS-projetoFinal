import React, { useState } from "react";
import Card from "../../Components/Card";
import { Container } from "./style";
import restaurants from "../../assets/data/restaurants.json";
import { TextField, Box } from "@mui/material";

export function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

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
          sx={{
            "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#003285", 
            },
            "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#003285", 
            },
            "&.Mui-focused .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
              borderColor: "#003285", 
            },
          }}
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
            sobre={restaurant.sobre}
          />
        ))}
      </Container>
    </>
  );
}
