import { SetasVoltar, Container, ContainerPoucasReservas, LinkExterno, Mensagem } from "./style";
import reservas from "../../assets/data/reservas.json";
import Card from "../../Components/Card";
import { ChevronLeft } from "lucide-react";

export function MinhasReservas() {
  const temPoucasReservas = reservas.length < 2;
  const temReservas = reservas.length > 0;

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
              />
            ))}
          </ContainerPoucasReservas>
        ) : (
          <Container>
            {reservas.map((reserva, index) => (
              <Card
                key={index}
                imagem={reserva.imagem}
                nome={reserva.nome}
                localizacao={reserva.localizacao}
                sobre={reserva.sobre}
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
