import {
  SetasVoltar,
  Container,
  ContainerPoucasReservas,
  LinkExterno,
  Mensagem,
} from "./style";
import Card from "../../Components/Card";
import { ChevronLeft } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";
import data from "../../assets/data/restaurants.json";

export function MinhasReservas() {
  const [reservas, setReservas] = useState([]);
  const temPoucasReservas = reservas.length < 2;
  const temReservas = reservas.length > 0;

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const userId = +localStorage.getItem("userID");
        const response = await axios.get(
          "https://aps-projetofinal-backend.onrender.com/schedules"
        );
        if (response.status === 200) {
          const filteredReservations = response.data.filter(
            (reservation) => reservation.userId === userId
          );
          setReservas(filteredReservations);
        } else {
          console.error("Error fetching reservations:", response.data);
        }
      } catch (error) {
        console.error("Error fetching reservations:", error);
      }
    };
    fetchReservations();
  }, []);

  return (
    <>
      <LinkExterno href="/">
        <SetasVoltar>
          <ChevronLeft size={28} /> <p>Voltar</p>
        </SetasVoltar>
      </LinkExterno>
      {temReservas ? (
        temPoucasReservas ? (
          <ContainerPoucasReservas>
            {reservas.map((reserva, index) => (
              <Card
                key={index}
                imagem={reserva.imagem}
                nome={reserva.nome}
                localizacao={reserva.localizacao}
                sobre={reserva.sobre}
                horarioFuncionamento={reserva.horarioFuncionamento}
                reservaData={reserva.data}
                reservaHorario={reserva.horario}
              />
            ))}
          </ContainerPoucasReservas>
        ) : (
          <Container>
            {reservas.map((reserva, index) => (
              <Card
                key={index}
                imagem={reserva.restaurant.imagem ?? data[index].imagem}
                nome={reserva.restaurant.name}
                localizacao={reserva.restaurant.address}
                sobre={reserva.restaurant.description}
                horarioFuncionamento={reserva.horarioFuncionamento}
                reservaData={reserva.day}
                reservaHorario={reserva.checkIn}
              />
            ))}
          </Container>
        )
      ) : (
        <Mensagem>Não existem reservas ainda. =)</Mensagem>
      )}
    </>
  );
}
