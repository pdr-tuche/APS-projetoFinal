import styled from "styled-components";

export const CardContainer = styled.div`
  background-color: #d5d5d5;
  display: flex;
  gap: 32px;
  border-radius: 16px;
  padding: 12px;
  font-family: Arial, Helvetica, sans-serif;
  transition: background-color 0.3s ease;
  align-items: center;

  &:hover {
    cursor: pointer;
    background-color: #dfdfdf;
  }

  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
`;

export const ImagemCard = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center;
  border-radius: 12px;

  @media (max-width: 750px) {
    width: 100%;
  }
`;

export const DescricaoCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const NomeRestaurante = styled.h3`
  font-weight: 600;
  font-size: 20px;
`;

export const AvaliacaoLocalizacaoWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

export const Localizacao = styled.p`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const DescricaoRestaurante = styled.p`
  font-size: 12px;
`;

export const BotaoReservar = styled.button`
  width: 60%;
  margin: 0 auto;
  padding: 12px;
  color: #fff;
  background-color: #003285;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const AvaliacaoRestaurante = styled.div`
  font-size: 16px;
  display: flex;
  align-items: end;
  gap: 4px;
`;
