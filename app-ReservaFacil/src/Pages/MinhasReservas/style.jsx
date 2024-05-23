import styled from "styled-components";

export const SetasVoltar = styled.span`
  color: #003285;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 32px 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;

  @media (max-width: 850px){
    display: flex;
    flex-direction: column;
  }
`;

export const ContainerPoucasReservas = styled.div`
  margin: 0 auto;
  padding: 32px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (max-width: 850px){
    display: flex;
    flex-direction: column;
  }
`;

export const LinkExterno = styled.a`
  text-decoration: none;
`;

export const Mensagem = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  font-size: 16px;
  color: #9c9c9c;
  font-family: Arial, Helvetica, sans-serif;
`
