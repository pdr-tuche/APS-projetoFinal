import React, { useEffect, useState } from "react";
import { Toaster, toast } from "sonner";
import { useLocation } from "react-router-dom";
import {
  Card as MUICard,
  CardMedia,
  Typography,
  Stack,
  Rating,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";
import axios from "axios";
import { API_BASE_URL } from "../../api";

export default function Card({
  imagem,
  nome,
  localizacao,
  sobre,
  horarioFuncionamento,
  reservaData,
  reservaHorario,
  userID,
  restaurantID,
  reservationID,
  avaliacaoID
}) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dataReserva, setDataReserva] = useState("");
  const [horarioReserva, setHorarioReserva] = useState("");
  const [avaliacaoReserva, setAvaliacaoReserva] = useState(0);
  const [userRating, setUserRating] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReservar = async () => {
    if (!dataReserva || !horarioReserva) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post(`${API_BASE_URL}/schedules`, {
        day: dataReserva,
        checkIn: horarioReserva,
        checkOut: "00:00",
        restaurantId: restaurantID,
        userId: userID,
      });

      if (response.status === 201) {
        toast.success("Reserva realizada com sucesso.");
        handleClose();
      } else {
        toast.error("Erro ao realizar a reserva. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao realizar a reserva. Tente novamente.");
    }
  };

  const handleCancelarReserva = async () => {
    if (!reservaData || !reservaHorario) {
      toast.error("Reserva inválida. Verifique os dados.");
      return;
    }

    try {
      const response = await axios.delete(
        `${API_BASE_URL}/schedules/${reservationID}`,
        {
          data: {},
        }
      );

      if (response.status === 204) {
        toast.success("Reserva cancelada com sucesso.");
        window.location.reload();
      } else {
        toast.error("Erro ao cancelar a reserva. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao cancelar a reserva. Tente novamente.");
    }
  };

  const handleAvaliar = async (newValue) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/ratings`, {
        rating: newValue,
        comment: "...",
        restaurantId: restaurantID,
        userId: userID,
      });

      if (response.status === 201) {
        toast.success("Avaliação enviada com sucesso!");
        setAvaliacaoReserva(newValue);
      } else {
        toast.error("Erro ao enviar avaliação. Tente novamente.");
      }
    } catch (error) {
      console.error(error);
      toast.error("Erro ao enviar avaliação. Tente novamente.");
    }
  };

  const fetchUserRating = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}/ratings/${restaurantID}`
      );

      if (response.status === 200) {
        const ratings = response.data;
        setUserRating(ratings.average);
      } else {
        console.error("Error fetching user rating:", response);
      }
    } catch (error) {
      console.error("Error fetching user rating:", error);
    }
  };

  useEffect(() => {
    if (location.pathname !== "/MinhasReservas" && userID) {
      fetchUserRating();
    }
  });

  return (
    <MUICard>
      <Toaster
        toastOptions={{
          style: {
            fontFamily: "Arial, sans-serif",
            gap: "12px",
            padding: "16px",
            fontSize: "14px",
          },
        }}
        position="bottom-right"
        richColors
      />
      <CardMedia
        component="img"
        alt={`Imagem do restaurante ${nome}`}
        image={imagem}
        title={nome}
        sx={{ height: 200, objectFit: "cover" }}
      />
      <Stack direction="column" spacing={2} p={2}>
        <Stack
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack direction="column" alignItems="start">
            <Typography variant="h6">{nome}</Typography>
            <Typography variant="body2" sx={{ color: "#9c9c9c" }}>
              {localizacao}
            </Typography>
          </Stack>
          {location.pathname !== "/MinhasReservas" && (
            <Rating name="user-rating" value={userRating} readOnly />
          )}
        </Stack>
        <Typography variant="body2">{sobre}</Typography>
        <Typography variant="body2">{horarioFuncionamento}</Typography>
        {location.pathname === "/MinhasReservas" ? (
          <Stack spacing={1}>
            <Divider />
            <Typography variant="body2">Data: {reservaData}</Typography>
            <Typography variant="body2">Horário: {reservaHorario}</Typography>
            <Divider />
            <Typography variant="body2">Faça aqui sua avaliação</Typography>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              alignItems={"center"}
              gap={"4px"}
            >
              <Typography variant="body2">Avaliação:</Typography>
              <Rating
                name="avaliacaoReserva"
                value={avaliacaoReserva}
                onChange={(event, newValue) => {
                  handleAvaliar(newValue);
                }}
              />
            </Stack>
            <Button
              variant="contained"
              color="error"
              fullWidth
              onClick={handleCancelarReserva}
            >
              Cancelar Reserva
            </Button>
          </Stack>
        ) : (
          <Button
            variant="contained"
            sx={{ backgroundColor: "#003285" }}
            fullWidth
            onClick={handleOpen}
          >
            Reservar mesa
          </Button>
        )}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Reservar Mesa</DialogTitle>
          <DialogContent sx={{ minWidth: 400 }}>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <div>
                <InputLabel htmlFor="data">Data</InputLabel>
                <Select
                  id="data"
                  fullWidth
                  value={dataReserva}
                  onChange={(e) => setDataReserva(e.target.value)}
                >
                  <MenuItem value="06/06/2024">06/06/2024</MenuItem>
                  <MenuItem value="07/06/2024">07/06/2024</MenuItem>
                  <MenuItem value="08/06/2024">08/06/2024</MenuItem>
                </Select>
              </div>
              <div>
                <InputLabel htmlFor="horario">Horário</InputLabel>
                <Select
                  id="horario"
                  fullWidth
                  value={horarioReserva}
                  onChange={(e) => setHorarioReserva(e.target.value)}
                >
                  <MenuItem value="18:00">18:00</MenuItem>
                  <MenuItem value="19:00">19:00</MenuItem>
                  <MenuItem value="20:00">20:00</MenuItem>
                </Select>
              </div>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleReservar}>Reservar</Button>
          </DialogActions>
        </Dialog>
      </Stack>
    </MUICard>
  );
}
