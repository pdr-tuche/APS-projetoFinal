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
  TextField,
  DialogActions,
  InputLabel,
  Select,
  MenuItem,
  Divider,
} from "@mui/material";

// Simulando banco de dados do restaurante
import opcoesMesa from "../../assets/data/opcoesMesa.json";

export default function Card({
  imagem,
  nome,
  localizacao,
  sobre,
  avaliacao,
  reservaData,
  reservaHorario,
  reservaMesa,
}) {
  const location = useLocation();
  const [open, setOpen] = useState(false); // Controle de permissão do botão de fazer reserva
  
  const [nomeReserva, setNomeReserva] = useState("");
  const [dataReserva, setDataReserva] = useState("");
  const [horarioReserva, setHorarioReserva] = useState("");
  const [mesaSelecionada, setMesaSelecionada] = useState("");
  const [avaliacaoReserva, setAvaliacaoReserva] = useState(0);

  // Simulando o estado de login do usuário
  const isLoggedIn = true;

  // Função para abrir o formulário para fazer reserva
  const handleReservarMesa = () => {
    if (isLoggedIn === false) {
      toast.error(
        "É necessário estar logado para efetuar a reserva de uma mesa."
      );
    } else {
      setOpen(true);
    }
  };

  // Função de fechar o formulário da reserva
  const handleClose = () => {
    setOpen(false);
  };

  // Função para selecionar a mesa
  const handleMesaChange = (event) => {
    setMesaSelecionada(event.target.value);
  };

  // Função para efetuar a reserva 
  const handleReservar = () => {
    if (!nomeReserva || !dataReserva || !horarioReserva || !mesaSelecionada) {
      toast.error("Por favor, preencha todos os campos.");
    } else {
      toast.success("Reserva realizada com sucesso.");
      handleClose();
    }
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

        <Typography variant="body2">{sobre}</Typography>
        {location.pathname === "/MinhasReservas" ? (
          <Stack spacing={1}>
            <Typography variant="body2">Data: {reservaData}</Typography>
            <Typography variant="body2">Horário: {reservaHorario}</Typography>
            <Typography variant="body2">Mesa: {reservaMesa}</Typography>
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
                <InputLabel htmlFor="nome">Nome</InputLabel>
                <TextField
                  autoFocus
                  id="nome"
                  type="text"
                  fullWidth
                  value={nomeReserva}
                  onChange={(e) => setNomeReserva(e.target.value)}
                />
              </div>
              <div>
                <InputLabel htmlFor="data">Data</InputLabel>
                <TextField
                  id="data"
                  type="date"
                  fullWidth
                  value={dataReserva}
                  onChange={(e) => setDataReserva(e.target.value)}
                />
              </div>

              <div>
                <InputLabel htmlFor="horario">Horário</InputLabel>
                <TextField
                  id="horario"
                  type="time"
                  fullWidth
                  value={horarioReserva}
                  onChange={(e) => setHorarioReserva(e.target.value)}
                />
              </div>

              <div>
                <InputLabel htmlFor="escolha-mesa">Escolha de Mesa</InputLabel>
                <Select
                  id="escolha-mesa"
                  value={mesaSelecionada}
                  onChange={handleMesaChange}
                  fullWidth
                >
                  {opcoesMesa.map((opcao, index) => (
                    <MenuItem key={index} value={opcao}>
                      {opcao}
                    </MenuItem>
                  ))}
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
