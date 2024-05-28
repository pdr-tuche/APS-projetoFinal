import React, { useState } from "react";
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

export default function Card({
  imagem,
  nome,
  localizacao,
  sobre,
  avaliacao,
  reservaData,
  reservaHorario,
  reservaMesa,
  horarioFuncionamento,
}) {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [dataReserva, setDataReserva] = useState("");
  const [horarioReserva, setHorarioReserva] = useState("");
  const [avaliacaoReserva, setAvaliacaoReserva] = useState(0);

  const isLoggedIn = true;

  const handleReservarMesa = () => {
    if (isLoggedIn === false) {
      toast.error(
        "É necessário estar logado para efetuar a reserva de uma mesa."
      );
    } else {
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleReservar = () => {
    if (!dataReserva || !horarioReserva) {
      toast.error("Por favor, preencha todos os campos.");
    } else {
      toast.success("Reserva realizada com sucesso.");
      handleClose();
    }
  };

  const handleCancelarReserva = () => {
    toast.success("Reserva cancelada com sucesso.");
  };

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
            <Rating value={avaliacao} readOnly size="small" />
          )}
        </Stack>
        <Typography variant="body2">{sobre}</Typography>{" "}
        {location.pathname === "/MinhasReservas" ? (
          <Stack spacing={1}>
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
                  setAvaliacaoReserva(newValue);
                  toast.success("Avaliação realizada com sucesso.");
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
            onClick={handleReservarMesa}
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
                  <MenuItem value="2024-05-28">28/05/2024</MenuItem>
                  <MenuItem value="2024-05-29">29/05/2024</MenuItem>
                  <MenuItem value="2024-05-29">30/05/2024</MenuItem>

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
                  <MenuItem value="10:00">18:00</MenuItem>
                  <MenuItem value="12:00">19:00</MenuItem>
                  <MenuItem value="15:00">20:00</MenuItem>
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
