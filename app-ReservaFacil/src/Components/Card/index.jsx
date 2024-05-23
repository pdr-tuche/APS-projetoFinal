import {
  BotaoReservar,
  CardContainer,
  DescricaoCard,
  ImagemCard,
  Localizacao,
  NomeRestaurante,
  DescricaoRestaurante,
  AvaliacaoRestaurante,
  AvaliacaoLocalizacaoWrapper,
} from "./style";

import { MapPinIcon, Star } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function Card({ imagem, nome, localizacao, sobre, avaliacao }) {
  const location = useLocation();

  return (
    <CardContainer>
      <ImagemCard src={imagem} alt="Imagem demonstrativa do restaurante" />
      <DescricaoCard>
        <NomeRestaurante>{nome}</NomeRestaurante>
        <AvaliacaoLocalizacaoWrapper>
          <AvaliacaoRestaurante>
            <Star size={18} /> {avaliacao}
          </AvaliacaoRestaurante>
          <Localizacao>
            <MapPinIcon size={18} /> {localizacao}
          </Localizacao>
        </AvaliacaoLocalizacaoWrapper>
        <DescricaoRestaurante>{sobre}</DescricaoRestaurante>
        <BotaoReservar>
          {location.pathname === "/MinhasReservas"
            ? "Verificar reserva"
            : "Reservar mesa"}
        </BotaoReservar>
      </DescricaoCard>
    </CardContainer>
  );
}
